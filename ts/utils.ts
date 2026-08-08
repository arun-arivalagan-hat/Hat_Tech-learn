import type { User } from "./types";

export function filterByName(users : User[], name : string) : User[] {
    const value = name.trim().toLowerCase();
    return users.filter(user => user.name.toLowerCase().includes(value));
}

export function sortByField<T>(
  items: T[],
  key: keyof T
): T[] {

  return [...items].sort((a,b)=>{

    const first = String(a[key]);
    const second = String(b[key]);

    return first.localeCompare(second);

  });

}

export function groupBy<T>(
  items:T[],
  key:keyof T
):Record<string,T[]> {


return items.reduce(
(acc,item)=>{

const groupKey = String(item[key]);

return {
  ...acc,
  [groupKey]: [
    ...(acc[groupKey] ?? []),
    item
  ]
};
},
{} as Record<string, T[]>
);

}

export function userStats<T extends { age: number }>(
users:T[]
){


const totalAge =
users.reduce(
(total,user)=>
total+user.age,
0
);


return {

totalUsers:
users.length,


averageAge:
users.length
?
totalAge/users.length
:
0,


oldestUser:
users.reduce(
(oldest,user)=>
user.age>oldest.age
?
user
:
oldest
)

};


}