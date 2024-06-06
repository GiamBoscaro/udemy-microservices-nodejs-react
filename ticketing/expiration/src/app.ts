import express from "express";
import 'express-async-errors';
import { json } from "body-parser";

import { errorHandler, NotFoundError } from '@gboscaro-udemy-ticketing/common';
import { healthRouter } from "./routes/health";

const app = express();
// Trust traffic as secure even if coming though
// the nginx ingress proxy
app.set('trust proxy', true);

app.use(json());
app.use(healthRouter);

app.all('*', () => {
  throw new NotFoundError();
})

app.use(errorHandler);

export { app }
