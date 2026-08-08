import { useState } from "react";
import type { User } from "./types/User";

import UserList from "./components/UserList";
import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter";
import UserForm from "./components/UseForm";
import { useUsers } from "./hooks/useUsers";
import UsersStatusMessage from "./components/UsersStatusMessage";
import { useDebouncedValue } from "./hooks/useDebounce";

export default function App() {
  const { usersState, setUsersState } = useUsers();
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebouncedValue(search, 300);
  const [role, setRole] = useState("All");
  const [editingUser, setEditingUser] =
    useState<User | null>(null);

  const handleSave = (user: User) => {
    setUsersState((prev) => {
      if (prev.status !== "success") {
        return { status: "success", users: [user] };
      }

      const exists = prev.users.some(
        (existing) => existing.id === user.id
      );

      return {
        status: "success",
        users: exists
          ? prev.users.map((existing) =>
              existing.id === user.id ? user : existing
            )
          : [...prev.users, user],
      };
    });
    setEditingUser(null);
  };

  const handleEdit = (user: User) => {
    setEditingUser(user);
  };

  const handleDelete = (id: number) => {
    setUsersState((prev) => {
      if (prev.status !== "success") {
        return prev;
      }

      return {
        status: "success",
        users: prev.users.filter((user) => user.id !== id),
      };
    });
  };

  const users =
    usersState.status === "success" ? usersState.users : [];

  const filteredUsers = users.filter((user) => {
    const matchesSearch = user.name
      .toLowerCase()
      .includes(debouncedSearch.toLowerCase());

    const matchesRole =
      role === "All" || user.role === role;

    return matchesSearch && matchesRole;
  });

  return (
    <div
      style={{
        width: "500px",
        margin: "30px auto",
      }}
    >
      <h1>Users Directory</h1>

      <SearchBar value={search} onChange={setSearch} />

      <br />
      <br />

      <UserForm
        editingUser={editingUser}
        onSave={handleSave}
      />

      <Filter value={role} onChange={setRole} />

      <br />
      <br />

      <UsersStatusMessage
        usersState={usersState}
        users={users}
        filteredUsers={filteredUsers}
      />

      {usersState.status === "success" &&
        filteredUsers.length > 0 && (
          <UserList
            users={filteredUsers}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}
    </div>
  );
}