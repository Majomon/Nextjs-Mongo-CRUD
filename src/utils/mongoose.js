import { connect, connection } from "mongoose";

const conn = {
  isConnected: false,
};

export async function connectDB() {
  if (conn.isConnected) return;
  const db = await connect(process.env.MONGODB_URI);
  console.log(db.connection.db.databaseName);
  conn.isConnected = db.connections[0].readyState;
}

connection.on("connected", () => {
  console.log("Mongoose conectado");
});

connection.on("error", (error) => {
  console.log(`Mongoose, error en la conexión`, error);
});

/* export async function connectDB() {
  const db = await mongoose.connect("mongodb://localhost/nextmondodbcrud");
  console.log(db.connection.db.databaseName);
} */

/* const connectMongoDb = async () => {
    try {
      if (conn.isConnected) return;
      const db = await mongoose.connect(process.env.MONGODB_URI);
      conn.isConnected = db.connections[0].readyState;
      console.log("Connect - Database Name: ", db.connection.db.databaseName);
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
    }
  };
  
  export default connectMongoDb; */
