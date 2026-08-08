import { useEffect, useState } from "react";
import type { User } from "../types/User";

type Props = {
  editingUser: User | null;
  onSave: (user: User) => void;
};

export default function UserForm({
  editingUser,
  onSave,
}: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<
    "Dev" | "Design" | "HR"
  >("Dev");

  useEffect(() => {
    if (editingUser) {
      setName(editingUser.name);
      setEmail(editingUser.email);
      setRole(editingUser.role);
    } else {
      setName("");
      setEmail("");
      setRole("Dev");
    }
  }, [editingUser]);

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!name.trim() || !email.trim()) {
      return;
    }

    onSave({
      id: editingUser ? editingUser.id : Date.now(),
      name,
      email,
      role,
    });

    if (!editingUser) {
      setName("");
      setEmail("");
      setRole("Dev");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>
        {editingUser ? "Edit User" : "Add User"}
      </h2>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <br />
      <br />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <br />
      <br />

      <select
        value={role}
        onChange={(e) =>
          setRole(
            e.target.value as
              | "Dev"
              | "Design"
              | "HR"
          )
        }
      >
        <option value="Dev">Dev</option>
        <option value="Design">Design</option>
        <option value="HR">HR</option>
      </select>

      <br />
      <br />

      <button
        type="submit"
        disabled={!name || !email}
      >
        {editingUser
          ? "Update User"
          : "Add User"}
      </button>
    </form>
  );
}