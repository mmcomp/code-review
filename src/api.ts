import express from "express";
import { PORT, DBURL, CORS_ORIGINS } from "./config";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { router as favoriteRouter } from "./routes/favorite.router";
import { router as profileRouter } from "./routes/profile.router";
import { router as simulatorRouter } from "./routes/simulator.router";

/*
* Creating database connection
*/
const startDBConnection: Function = async () => {
  await mongoose.connect(`${DBURL}`, { useNewUrlParser: true, useUnifiedTopology: true });
  console.log(`Connected to DB ${DBURL}`);
};

/*
* Creating a web api instance
*/
const startHttpServer: Function =  async () => {
  const app = express();
  app.use(cors({ origin: CORS_ORIGINS }));
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(favoriteRouter);
  app.use(profileRouter);
  app.use(simulatorRouter);
  
  app.listen(PORT, () =>
    console.log(`✅  Ready on port http://localhost:${PORT}`)
  );
};

/*
* Starting the whole application
*/
const start: Function = async () => {
  try {
    await startDBConnection();
    await startHttpServer();
  } catch (e) {
    console.error('Error starting application :', e);
  }
};

start();