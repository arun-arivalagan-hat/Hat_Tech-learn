import type { User } from "../types/User";
import UserCard from "./UserCard";

type Props = {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (id: number) => void;
};

export default function UserList({
  users,
  onEdit,
  onDelete,
}: Props) {
  return (
    <>
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </>
  );
}
