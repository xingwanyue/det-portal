import knex, { Knex } from "knex";

const config = useRuntimeConfig()
const dbKnex = knex({
  client: "mysql2",
  connection: config.databaseUrl,
});

function db(): Knex;
function db<TRecord extends object = any, TResult = any[]>(
  tableName: string
): Knex.QueryBuilder<TRecord, TResult>;
function db<TRecord extends object = any, TResult = any[]>(
  tableName?: string
): Knex | Knex.QueryBuilder<TRecord, TResult> {
  if (tableName) return dbKnex<TRecord, TResult>(tableName);
  return dbKnex;
}

export default db;
