import mongoose from 'mongoose'

declare var process: {
    env : {
        MONGODB_URI: String
    }
}

// export const connectDB = async()=>{
//     await mongoose.connect(process.env.MONGODB_URI,{
        
//     })
// }