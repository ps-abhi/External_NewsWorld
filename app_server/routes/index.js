require('dotenv').config();
var express = require('express');
var router = express.Router();
var ctrlCatalogue = require('../controllers/list');
var ctrlOthers = require('../controllers/others');
/* Locations pages */
router.get('/', ctrlCatalogue.catalogue);

/* Other pages */

router.get('/about', ctrlOthers.about);

module.exports = router;