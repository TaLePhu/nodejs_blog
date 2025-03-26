import mongoose from 'mongoose';

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/f8_education_dev');
        console.log("✅ Connected successfully to MongoDB");
    } catch (error) {
        console.error("❌ Connection failed:", error.message);
        process.exit(1);
    }
}

export default connect;
