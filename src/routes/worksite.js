const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../middleware/checkAuth');
const worksiteController = require('../controllers/worksiteController');

router.get('/worksite', isLoggedIn, worksiteController.worksite);

router.get('/addworksite', isLoggedIn, worksiteController.addWorksite);
router.post('/addworksite', isLoggedIn, worksiteController.postWorksite);

module.exports = router;