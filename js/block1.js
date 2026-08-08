// export const users = [
//   { id: 1, name: "Alice", age: 25, city: "London", role: "Developer" },
//   { id: 2, name: "Bob", age: 30, city: "Paris", role: "Designer" },
//   { id: 3, name: "Charlie", age: 28, city: "London", role: "Developer" },
//   { id: 4, name: "David", age: 35, city: "Berlin", role: "Manager" },
//   { id: 5, name: "Emma", age: 22, city: "Paris", role: "Developer" },
//   { id: 6, name: "Frank", age: 40, city: "Berlin", role: "Manager" },
//   { id: 7, name: "Grace", age: 27, city: "London", role: "Designer" },
//   { id: 8, name: "Henry", age: 32, city: "Rome", role: "Developer" },
//   { id: 9, name: "Ivy", age: 24, city: "Rome", role: "Designer" },
//   { id: 10, name: "Jack", age: 29, city: "Paris", role: "Developer" },
//   { id: 11, name: "Kate", age: 31, city: "London", role: "Manager" },
//   { id: 12, name: "Leo", age: 26, city: "Berlin", role: "Developer" },
//   { id: 13, name: "Mia", age: 23, city: "Rome", role: "Designer" },
//   { id: 14, name: "Noah", age: 38, city: "Paris", role: "Manager" },
//   { id: 15, name: "Olivia", age: 21, city: "London", role: "Developer" },
//   { id: 16, name: "Peter", age: 33, city: "Berlin", role: "Designer" },
//   { id: 17, name: "Queen", age: 36, city: "Rome", role: "Manager" },
//   { id: 18, name: "Ryan", age: 28, city: "Paris", role: "Developer" },
//   { id: 19, name: "Sophia", age: 34, city: "London", role: "Designer" },
//   { id: 20, name: "Tom", age: 27, city: "Berlin", role: "Developer" }
// ];
 import { users } from "./data.js";
 
export function filterUsers(users,word)
{
    return users.filter(user=> user.name.toLowerCase().includes(word.toLowerCase()))
}
 
const filteredUsers =  filterUsers(users,"ia");
console.log(filteredUsers)
 
 
export function sortByField(users,field)
{
    return [...users].sort((a,b)=>{
        if(a[field] < b[field] )return -1;
        if(a[field] > b[field]) return 1;
        return 0;
    })
}
const sortUsers = sortByField(users,"age");
console.log(sortUsers)
 
 
 
export function groupByField(users, field){
 
  return users.reduce((groups,user)=>{
 
    const key = user[field];
 
    if(!groups[key]){
      groups[key]=[];
    }
 
    groups[key].push(user);
 
    return groups;
 
  },{});
 
}
 
// const grouped = groupByField(users,"city");
 
// console.log(grouped);
 
export function getSummaryStats(users){
 
  const totalUsers = users.length;
 
 
  const totalAge = users.reduce(
    (sum,user)=>sum+user.age,
    0
  );
 
 
  const averageAge = totalAge / totalUsers;
 
 
  const oldestUser = users.reduce(
    (oldest,user)=>
      user.age > oldest.age
        ? user
        : oldest
  );
 
 
  const youngestUser = users.reduce(
    (youngest,user)=>
      user.age < youngest.age
        ? user
        : youngest
  );
 
 return {
    totalUsers,
    totalAge,
    averageAge,
    oldestUser,
    youngestUser
 }
 
  
 
}
 