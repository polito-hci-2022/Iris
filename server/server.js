"use strict";

const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const morgan = require("morgan");
const dao = require("./dao");
const cors = require("cors");
const { body, validationResult, param } = require("express-validator");
const { request, response } = require("express");

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

app.get("/api/test/results", (request, response) => {
  dao
    .getTestResults()
    .then((res) => response.status(200).json(res))
    .catch(() => response.status(500).end());
});

app.post("/api/memory", (request, response) => {
  dao
    .addMemory()
    .then(() => response.status(200).json({}).end())
    .catch(() => response.status(500).end());
});

app.post("/api/page", (request, response) => {
  dao
    .addPageCastleStory()
    .then(() => response.status(200).json({}).end())
    .catch(() => response.status(500).end());
});

app.post("/api/test", (request, response) => {
  dao
    .addTest()
    .then(() => response.status(200).json({}).end())
    .catch(() => response.status(500).end());
});

app.delete("/api/memory", async (req, res) => {
  const id = req.user?.id;
  try {
    await dao.deleteMemory();
    res.status(200).json({}).end();
  } catch (err) {
    console.error(err);
    res.status(503).json({ error: `Database error while updating ${id}.` });
  }
});

app.delete("/api/pageCastleStory", async (req, res) => {
  const id = req.user?.id;
  try {
    await dao.deletePageCastleStory();
    res.status(200).json({}).end();
  } catch (err) {
    console.error(err);
    res.status(503).json({ error: `Database error while updating ${id}.` });
  }
});

app.delete("/api/test", async (req, res) => {
  const id = req.user?.id;
  try {
    await dao.deleteTest();
    res.status(200).json({}).end();
  } catch (err) {
    console.error(err);
    res.status(503).json({ error: `Database error while updating ${id}.` });
  }
});

app.put("api/test/result", (request, response) => {
  dao
    .saveTest(request.answer1, request.answer2)
    .then(() => response.status(200).json({}).end())
    .catch(() => response.status(500).end());
});

// activate the server
app.listen(port, () =>
  console.log(`Server started at http://localhost:${port}.`)
);
