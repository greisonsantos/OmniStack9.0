const express = require("express");

const routes = express.Router();

const SessionContoller = require("./app/controllers/SessionController");

routes.post("/sessions", SessionContoller.store);

module.exports = routes;
