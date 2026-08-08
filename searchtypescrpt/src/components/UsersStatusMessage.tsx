import type { User } from "../types/User";
import type { UsersState } from "../hooks/useUsers";

type Props = {
  usersState: UsersState;
  users: User[];
  filteredUsers: User[];
};

export default function UsersStatusMessage({
  usersState,
  users,
  filteredUsers,
}: Props) {
  if (usersState.status === "loading") {
    return <p>Loading users...</p>;
  }

  if (usersState.status === "error") {
    return <p role="alert">{usersState.error}</p>;
  }

  if (users.length === 0) {
    return <p>No users available right now.</p>;
  }

  if (filteredUsers.length === 0) {
    return <p>No users match the current filters.</p>;
  }

  return null;
}
