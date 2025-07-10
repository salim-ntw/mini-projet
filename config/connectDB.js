import mongoose from "mongoose";


async function connectToDB() {
    await mongoose.connect(process.env.MONGO_URL)
    console.log("datebase connected");
    
}

export default connectToDB