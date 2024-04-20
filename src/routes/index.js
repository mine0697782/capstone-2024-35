const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');
const { isLoggedIn } = require('../middleware/checkAuth');

/**
 * App Routes 
*/
router.get('/', mainController.homepage);
router.get('/about', mainController.about);

//추후 각각의 컨트롤러로 보내야함
router.get('/worksite', isLoggedIn, mainController.worksite);
router.get('/employee', isLoggedIn, mainController.employee);

module.exports = router;