import mongoose from "mongoose";
import dotenv, { config } from 'dotenv'
dotenv.config()
let url="mongodb://localhost:27017/UsersCollection"
let uri=`mongodb://${process.env.MONGOOSE_USER}:${process.env.MONGOOSE_PASSWORD}@ac-behizqi-shard-00-00.6quyyc2.mongodb.net:27017,ac-behizqi-shard-00-01.6quyyc2.mongodb.net:27017,ac-behizqi-shard-00-02.6quyyc2.mongodb.net:27017/?ssl=true&replicaSet=atlas-xgydnk-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0`
const dbconnect=async()=>{
   try {
    await mongoose.connect(uri)
    console.log("Database connected");
   } catch (error) {
      console.log("unable to connect database");
   }
}
export default dbconnect;
