import mongoose from "mongoose";
import { DB_name } from "../constant.js";

const DB_Connect=async()=>{
    try{
       const data_instance=await mongoose.connect(`${process.env.DATABASW_URI}/${DB_name}`);
       console.log(`\n database connected :), db host:${data_instance.connection.host}`);


    }
    catch(err){
        console.error({MongoDB_Connection_Failed:err});
        process.exit(1);
    }

}
export default DB_Connect;