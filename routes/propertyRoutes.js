const propertyController = require('../controllers/propertyController');
const express = require('express');
const router = express.Router();

router.get('/property', propertyController.getAllProperty);
router.get('/property/:id', propertyController.getSingleProperty)

module.exports=router;