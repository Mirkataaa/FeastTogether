import express from "express";
import expressInit from './config/expressInit.js'
import { corsMiddleware } from "./middlewares/cors.js";
import 'dotenv/config'
import mongooseInit from "./config/mongooseInit.js"

const app = express();



app.use(corsMiddleware);
mongooseInit();
expressInit(app);


app.listen(process.env.PORT , () => console.log(`Server is running on port: ${process.env.PORT}`));