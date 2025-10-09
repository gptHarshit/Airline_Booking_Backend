const express = require("express");

const { AirPlaneController } = require("../../controllers");
const { AirplaneMiddlewares } = require("../../middlewares");

const router = express.Router();

router.post(
        "/",
        AirplaneMiddlewares.validateCreateRequest,
        AirPlaneController.createAirplane
);

router.get("/", 
           AirPlaneController.getAirplanes);

module.exports = router;
