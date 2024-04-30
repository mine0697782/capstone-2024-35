const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../middleware/checkAuth');
const employeeContoller = require('../controllers/employeeController');

router.get('/employee', isLoggedIn, mainController.employee);

module.exports = router;