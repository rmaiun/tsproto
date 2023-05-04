import pool from '../configs/dbConfig';
import {PoolClient} from "pg";
import {Cat, CatEntity} from "../configs/datatypes";

class CatRepo{
    public async createCat(cat:Cat){
        const client= await pool.connect();
        const ageValue = typeof cat.age === "number" ? cat.age : Number(cat.age);
        const catEntity:CatEntity = {
            id: 1,
            name: cat.name,
            age: ageValue
        };
        await client.query(`insert into arbiter.cat (id, name, age) values (${catEntity.id}, '${catEntity.name}', ${catEntity.age})`);
        client.release();
    }
}

export default new CatRepo();