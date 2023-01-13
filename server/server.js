"use strict";

const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const morgan = require("morgan");
const dao = require("./dao");
const cors = require("cors");
const { body, validationResult, param } = require("express-validator");

// init express
const app = express();
const port = 3001;

// set up the middlewares
app.use(morgan("dev"));
app.use(express.json());

// set up and enable cors
const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
  credentials: true,
};
app.use(cors(corsOptions));

app.get("/api/memory",(request, response) => {
  dao
    .getMemory()
    .then((rows) => response.status(200).json(rows))
    .catch(() => response.status(500).end());
});

app.get("/api/page",(request, response) => {
  dao
    .getPageCastleStory()
    .then((rows) => response.status(200).json(rows))
    .catch(() => response.status(500).end());
});

app.get("/api/test",(request, response) => {
  dao
    .getTest()
    .then((rows) => response.status(200).json(rows))
    .catch(() => response.status(500).end());
});

// activate the server
app.listen(port, () =>
  console.log(`Server started at http://localhost:${port}.`)
);
