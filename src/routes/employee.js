const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../middleware/checkAuth');
const employeeController = require('../controllers/employeeController');

router.get('/employee', isLoggedIn, employeeController.employee);

router.get('/addemployee', isLoggedIn, employeeController.addEmployee);
router.post('/addemployee', isLoggedIn, employeeController.postEmployee);



module.exports = router;