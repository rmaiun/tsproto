import {Pool} from "pg";
import * as process from "process";
const connectionString = 'postgresql://root:password@localhost:5432/root?currentSchema=arbiter'

export default new Pool({
    connectionString

});