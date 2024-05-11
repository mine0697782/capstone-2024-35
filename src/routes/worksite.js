const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../middleware/checkAuth');
const worksiteController = require('../controllers/worksiteController');

router.get('/worksite', isLoggedIn, worksiteController.worksite);
router.get('/worksite/:id', isLoggedIn, worksiteController.showWorksite)
router.get('/addworksite', isLoggedIn, worksiteController.addWorksite);
router.get('/worksite/:id/hire', isLoggedIn, worksiteController.matchToWorksite);
router.get('/worksite/:id/hire/:eid', isLoggedIn, worksiteController.worksiteHireEmployee);
router.post('/addworksite', isLoggedIn, worksiteController.postWorksite);


module.exports = router;