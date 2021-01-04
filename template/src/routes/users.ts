// var express = require("express");
import express, { Response, Request } from "express";
const router = express.Router();

/* GET users listing. */
router.get("/", function (req: Request, res: Response) {
    res.send("respond with a resource");
});

export default router;