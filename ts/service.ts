import {
fetchUsers
}
from "./api";


import {
filterByName,
sortByField,
groupBy,
userStats
}
from "./utils";


export async function getProcessedUsers(){

const users =
await fetchUsers();


const filtered =
filterByName(
users,
"Leanne"
);


const sorted =
sortByField(
filtered,
"name"
);


const grouped =
groupBy(
sorted,
"age"
);


const stats =
userStats(
users
);


return {

users:sorted,

grouped,

stats

};

}