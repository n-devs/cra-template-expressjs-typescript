// import { UnauthorizedError } from "express-jwt";
import startServer from "./Server";
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import session from 'express-session';

require("dotenv").config();

const app = express();
//? MiddleWares
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
    secret: 'api',
    resave: true,
    saveUninitialized: true,
}));

// Check for Invalid Token Error
app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
    if (err.name === "UnauthorizedError") {
        res.status(err.status).send({ message: err.message });
        return;
    }
    next();
});

startServer(app);