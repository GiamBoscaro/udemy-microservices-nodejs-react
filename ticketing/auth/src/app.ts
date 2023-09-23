import express from "express";
import 'express-async-errors';
import { json } from "body-parser";

import { currentUserRouter } from "./routes/current-user";
import { signinRouter } from "./routes/signin";
import { signoutRouter } from "./routes/signout";
import { signupRouter } from "./routes/signup";
import { errorHandler, NotFoundError } from '@gboscaro-udemy-ticketing/common';
import cookieSession from "cookie-session";

const app = express();
// Trust traffic as secure even if coming though
// the nginx ingress proxy
app.set('trust proxy', true);

app.use(json());
app.use(cookieSession({
  signed: false,
  secure: false,
}));
app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.all('*', () => {
  throw new NotFoundError();
})

app.use(errorHandler);

export { app }
