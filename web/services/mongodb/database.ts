import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        console.log("MONGO URL : ", process.env.MONGODB_URL + process.env.MONGODB_DBNAME)

        return await mongoose.connect(process.env.MONGODB_URL + process.env.MONGODB_DBNAME);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); // Exit the process with an error
    }
};

export default connectDB;