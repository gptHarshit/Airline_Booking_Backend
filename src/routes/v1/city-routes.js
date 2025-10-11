const express = require("express");
const { CityController } = require("../../controllers");
const { CityMiddlewares } = require("../../middlewares");

const router = express.Router();

// /api/v1/cities   post call
router.post(
  "/",
  CityMiddlewares.validateCreateRequest,
  CityController.createCity
);


router.patch("/:id",
  CityController.updateCity);

module.exports = router;
