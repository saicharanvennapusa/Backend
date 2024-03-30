import mongoose from "mongoose";

const connectDB = async () => {

    try {
        const connectionInstance =
            await mongoose.connect("mongodb+srv://vennapusasaicharanreddy:Charann2@cluster0.fe2jmrp.mongodb.net/videotube")
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host
            }`)

    } catch (error) {
        console.log("MONGODB connection error ", error)
        process.exit(1)
    }
}

export default connectDB