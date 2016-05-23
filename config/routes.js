var express = require('express');
var router = express.Router();
//Require controllers
var patientsController = require('../controllers/patients');


// root path:
router.get('/', patientsController.index);
// router.get('/about', pagesController.about);
// router.get('/todos',    pagesController.index);

//API
router.get('/api/patients',patientsController.index);
router.get('/api/patients/:id',patientsController.show);
router.post('/api/patients', patientsController.create);
router.delete('/api/patients/:id', patientsController.destroy);
router.put('/api/patients/:id', patientsController.update);


// router.route('/api/patients')
//   .get(showsController.index)
//   .post(showsController.create);

// router.route('/api/patients/:id')
//   .get(showsController.show)
//   .put(showsController.update)
//   .delete(showsController.destroy);

// /* GET home page. */
// router.get('*', function(req, res, next) {
//   res.sendFile('public/index.html');
// });

module.exports = router;
