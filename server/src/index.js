import express from "express";
import expressInit from './config/expressInit.js'
import { corsMiddleware } from "./middlewares/cors.js";

const app = express();

app.use(corsMiddleware);


expressInit(app)
