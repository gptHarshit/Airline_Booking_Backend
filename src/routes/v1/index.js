const express = require('express');
const { infoController }= require('../../controllers');
const v1Routes = express.Router();


v1Routes.get("/info", infoController.info);


module.exports = v1Routes;