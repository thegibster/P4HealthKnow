var express = require('express');
var router = express.Router();
//Require controllers
var patientsController = require('../controllers/patients');


// root path:
router.get('/', patientsController.index);
// router.put('/patients/:id', patientsController.update);
// router.post('/patients', patientsController.create);
// router.delete('/patients/:id', patientsController.destroy);

//API
router.get('/api/patients',patientsController.index);
router.get('/api/patients/:id',patientsController.show);
router.put('/api/patients/:id', patientsController.update);
router.post('/api/patients', patientsController.create);
// router.delete('/api/patients/:id', patientsController.destroy);



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
