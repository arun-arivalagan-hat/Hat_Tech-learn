export type Company = {
 // id: number;
  name: string;
 // address: string;
};

export type User = {
  id: number;
  name: string;
  age : number;
  email: string;
  isActive: boolean;
  password: string;
  role: "admin" | "user" | "guest";
  company?: Company; // Optional property
};
export type FetchState<T> =
  | {
      status: "idle";
    }
  | {
      status: "loading";
    }
  | {
      status: "success";
      data: T;
    }
  | {
      status: "error";
      error: string;
    };