import type { User } from "./types.ts";


function isUser(value:unknown):value is User {


if(
typeof value !== "object" ||
value===null
){

return false;

}


return (
"id" in value &&
"name" in value &&
"email" in value
);

}
export async function fetchUsers()
:Promise<User[]> {


const response = await fetch("https://jsonplaceholder.typicode.com/users");


if(!response.ok){

throw new Error(
`HTTP Error ${response.status}`
);

}


const data:unknown =
await response.json();


if(
!Array.isArray(data)
){

throw new Error(
"Invalid API response"
);

}


const users =
data.filter(isUser);


return users;

}