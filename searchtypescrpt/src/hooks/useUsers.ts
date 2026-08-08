import { useEffect, useState } from "react";
import type { User } from "../types/User";
import { useFetch } from "./useFetch";

export type UsersState =
  | { status: "loading" }
  | { status: "error"; error: string }
  | { status: "success"; users: User[] };

function mapUser(user: {
  id: number;
  name: string;
  email: string;
}): User {
  const roles: User["role"][] = ["Dev", "Design", "HR"];

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    role: roles[user.id % roles.length],
  };
}

export function useUsers() {
  const [usersState, setUsersState] = useState<UsersState>({
    status: "loading",
  });
  const { data, loading, error } = useFetch<
    Array<{ id: number; name: string; email: string }>
  >("https://jsonplaceholder.typicode.com/users");

  useEffect(() => {
    if (loading) {
      setUsersState({ status: "loading" });
      return;
    }

    if (error) {
      setUsersState({ status: "error", error });
      return;
    }

    if (!data) {
      setUsersState({ status: "success", users: [] });
      return;
    }

    setUsersState({
      status: "success",
      users: data.map(mapUser),
    });
  }, [data, error, loading]);

  return { usersState, setUsersState };
}
