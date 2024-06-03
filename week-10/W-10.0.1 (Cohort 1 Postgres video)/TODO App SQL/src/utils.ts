import { Client } from "pg";

export default async function getClient() {
  const client = new Client({
    connectionString:
      "postgresql://cohort_owner:6kgAs2KIcHRS@ep-summer-tree-a5w33tk2.us-east-2.aws.neon.tech/cohort?sslmode=require",
    // connectionString: 'postgresql://postgres:mysecretpassword@localhost:5432/postgres?sslmode=disable',
    //   host: "localhost",
    //   port: 5432,
    //   database: "postgres",
    //   user: "postgres",
    //   password: "mysecretpassword",
  });
  await client.connect();
  return client;
}
