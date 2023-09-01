import mongoose from "mongoose";

const conn = {
  isConnected: false,
};

const connectMongoDb = async () => {
  try {
    if (conn.isConnected) return;
    const db = await mongoose.connect(process.env.MONGODB_URI);
    conn.isConnected = db.connections[0].readyState;
    console.log("Connect - Database Name: ", db.connection.db.databaseName);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default connectMongoDb;
