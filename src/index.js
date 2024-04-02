import dotenv from "dotenv";
import DB_Connect from "./db/db.js";
dotenv.config({
    path:"./"
});

DB_Connect()