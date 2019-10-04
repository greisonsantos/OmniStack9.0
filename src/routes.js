const express = require("express");

const routes = express.Router();

routes.post("/", (req, res) => {
  return res.json(req.body);
});

module.exports = routes;
