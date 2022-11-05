import express, { Express } from "express";
import connectToDatabase from "./databases/connection.js";
import Middleware from "@src/middleware/index.js";
import router from "@src/router.js";

export async function createApp() {
  const app: Express = express();

  const middleware = new Middleware(app);
  middleware.registerBeforeRoutes();

  await connectToDatabase();
  app.use("/v1", await router());

  middleware.registerAfterRoutes();

  return app;
}
