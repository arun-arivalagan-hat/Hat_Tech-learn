// Block 1-style transform functions
const toUpperCaseName = user => ({
  ...user,
  name: user.name.toUpperCase()
});

const keepNameAndEmail = user => ({
  name: user.name,
  email: user.email
});

async function fetchUser(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );

  if (!response.ok) {
    throw new Error(`Failed with status ${response.status}`);
  }

  return response.json();
}

async function main() {
  try {
    console.log("Single request");

    const user = await fetchUser(1);

    const transformed = keepNameAndEmail(
      toUpperCaseName(user)
    );

    console.log(transformed);

    console.log("\nSequential");

    console.time("Sequential");

    const u1 = await fetchUser(1);
    const u2 = await fetchUser(2);
    const u3 = await fetchUser(3);

    console.timeEnd("Sequential");

    console.log([u1.name, u2.name, u3.name]);

    console.log("\nParallel");

    console.time("Parallel");

    const users = await Promise.all([
      fetchUser(1),
      fetchUser(2),
      fetchUser(3)
    ]);

    console.timeEnd("Parallel");

    console.log(users.map(user => user.name));

  } catch (err) {
    console.error("Error:", err.message);
  }
}

main();