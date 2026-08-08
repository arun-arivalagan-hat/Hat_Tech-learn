import type { User } from "../types/User";

type Props = {
  user: User;
  onEdit: (user: User) => void;
  onDelete: (id: number) => void;
};

export default function UserCard({
  user,
  onEdit,
  onDelete,
}: Props) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        marginBottom: "10px",
        borderRadius: "8px",
      }}
    >
      <h3>{user.name}</h3>

      <p>{user.email}</p>

      <strong>{user.role}</strong>

      <div
        style={{
          marginTop: "10px",
          display: "flex",
          gap: "8px",
        }}
      >
        <button
          type="button"
          onClick={() => onEdit(user)}
        >
          Edit
        </button>
        <button
          type="button"
          onClick={() => onDelete(user.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
