const express = require("express");
const multer = require("multer");
const uploadConfig = require("./config/upload");

const routes = express.Router();
const upload = multer(uploadConfig);

const SessionContoller = require("./app/controllers/SessionController");
const SpotController = require("./app/controllers/SpotController");
const DashboardController = require("./app/controllers/DashboardController");
const BookingController = require("./app/controllers/BookingController");

routes.post("/sessions", SessionContoller.store);
routes.get("/spots", SpotController.index);
routes.post("/spots", upload.single("img"), SpotController.store);

routes.get("/dashboard", DashboardController.show);
routes.post("/spots/:spot_id/bookings", BookingController.store);
module.exports = routes;
