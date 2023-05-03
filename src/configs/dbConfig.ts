import {Pool} from "pg";
import * as process from "process";

export default new Pool({
    connectionString: process.env.DB_URL
});