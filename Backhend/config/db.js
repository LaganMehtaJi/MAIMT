import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectDB = ()=> {
mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.error("Error connecting to MongoDB:", err);
}); 
}
export default connectDB;