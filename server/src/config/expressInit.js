import express from "express";
import cookieParser from "cookie-parser";
import routes from "../routes.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

export default function expressInit(app) {
    app.use(cookieParser());
    app.use(express.json());
    app.use(authMiddleware);
    app.use(routes);
}


