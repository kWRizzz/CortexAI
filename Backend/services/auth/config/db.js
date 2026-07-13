import mongoose from "mongoose";

export const connectDB=async () => {
    try {
        
        const connect =await mongoose.connect(process.env.MONGODB_URI);
        console.log(` connected to db ${connect.connection.host}`);

    } catch (error) {
        console.log(` cant connect to databse ${error}`)
    }
}