const express = require('express');
const { getIndexPage } = require('../controllers/indexController');
const router = express.Router();

router.get('/', getIndexPage);

module.exports = router;
