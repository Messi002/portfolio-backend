const portfolioController = require("../controller/app.controller");
const testimonialController = require("../controller/app.controller");
const express = require('express');
const router = express.Router();


router.get('/portfolio', portfolioController.portfolioAppRoute);
