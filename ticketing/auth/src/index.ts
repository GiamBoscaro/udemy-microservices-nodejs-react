import express from "express";
import 'express-async-errors';
import { json } from "body-parser";

import { currentUserRouter } from "./routes/current-user";
import { signinRouter } from "./routes/signin";
import { signoutRouter } from "./routes/signout";
import { signupRouter } from "./routes/signup";
import { errorHandler } from "./middlewares/error-handler";
import { NotFoundError } from "./errors/not-found-error";
import mongoose from "mongoose";
import cookieSession from "cookie-session";

const app = express();
// Trust traffic as secure even if coming though
// the nginx ingress proxy
app.set('trust proxy', true);

app.use(json());
app.use(cookieSession({
  signed: false,
  secure: true,
}));
app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.all('*', () => {
  throw new NotFoundError();
})

app.use(errorHandler);

const start = async () => {
  if (!process.env.JWT_KEY) {
    throw Error('JWT_KEY must be defined');
  }

  try {
    await mongoose.connect('mongodb://auth-mongo-srv:27017/auth');    
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error(err);    
  }

  app.listen(3000, () => {
    console.log("Listening on port 3000");
  });
}

start();
