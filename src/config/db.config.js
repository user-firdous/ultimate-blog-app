import mongoose from "mongoose";

export const dbConnection = async()=>{

    try {
        const uri = "mongodb://127.0.0.1:27017/blog-demo"
        await mongoose.connect( uri )

        console.info("database connect ")

    } catch (error) {
        console.error("error => " , error)
    }

}