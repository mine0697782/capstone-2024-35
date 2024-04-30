const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../middleware/checkAuth');
const worksiteContoller = require('../controllers/worksiteController');

router.get('/worksite', isLoggedIn, worksiteContoller.worksite);

module.exports = router;