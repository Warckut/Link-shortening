import "dotenv/config";
import knex from "knex";
import * as utils from "./utils";

const pg = knex({
    client: 'pg',
    connection: {
        user: process.env.PG_USER,
        host: process.env.PG_HOST,
        database: process.env.PG_DB,
        password: process.env.PG_PSW,
        port: Number(process.env.PG_PORT),
    },
    ...utils,
});

export default pg;
