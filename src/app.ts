import { Request, Response } from "express";
import express = require("express");
import bodyParser from "body-parser";
import { UserController } from "./controllers/user.controller";
import { User } from "./models/user.model";
import SwaggerUI from "swagger-ui-express";
import "./controllers/user.controller";
import { RegisterRoutes } from "../dist/routes";

const app = express();
const swaggerDoc = require("../dist/swagger.json");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/docs", SwaggerUI.serve, SwaggerUI.setup(swaggerDoc));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World \n");
});

app.get("/users/:id", async (req: Request, res: Response) => {
  res.send("get user");
});

RegisterRoutes(app);

export { app };
