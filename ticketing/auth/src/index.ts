import { app } from "./app";
import mongoose from "mongoose";

const start = async () => {
  if (!process.env.JWT_KEY) {
    throw Error('JWT_KEY must be defined');
  }
  if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI must be defined');
  }

  try {
    await mongoose.connect(process.env.MONGO_URI);    
    console.log('Connected to MongoDB');
    process.env.SERVICE_STATUS = 'HEALTHY';
  } catch (err) {
    console.error(err);
    process.env.SERVICE_STATUS = 'UNHEALTHY';
  }

  app.listen(3000, () => {
    console.log("Listening on port 3000");
  });
}

start();
