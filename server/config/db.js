import mongoose from "mongoose"

export const connectDB = async () =>{   
    try{
        const db_url = process.env.MONGODB_URI 
        const db_name = process.env.DB_NAME
        await mongoose.connect(`${db_url}/${db_name}`,)
        console.log("mongoDB connected");
        
    }catch(error){
        console.error("Error connecting to mongoDB",error)
    }
}