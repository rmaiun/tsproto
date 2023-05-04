import dotenv from "dotenv";
import express, {Request} from "express";
import path from "path";
import CatRepo from "./repos/CatRepo";
import * as process from "process";
import bodyParser from 'body-parser'

// initialize configuration
dotenv.config();

// port is now available to the Node.js runtime
// as if it were an environment variable
const port = process.env.SERVER_PORT;
const app = express();
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })

// console.log(`${JSON.stringify(process.env)}`)
// Configure Express to use EJS
// app.set( "views", path.join( __dirname, "views" ) );
// app.set( "view engine", "ejs" );

// define a route handler for the default home page

app.get( "/", async ( req, res ) => {
    // render the index template
    res.json( {rootGet: "OK"} );
} );
app.post( "/", jsonParser, async ( req: Request<Cat>, res ) => {
    // render the index template
    const cat = req.body
    await CatRepo.createCat(cat);
    res.json( {rootPost: "OK"} );
} );

// start the express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );