import { getProcessedUsers } from "./service";

async function main() {
  const result = await getProcessedUsers();
  console.log(JSON.stringify(result, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});