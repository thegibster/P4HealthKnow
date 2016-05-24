var express = require('express');
var router = express.Router();
var rp = require('request-promise')
var parseString = require('xml2js').parseString;
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

router.put('/sillytest',function(res,req){
    // console.log(res.body.imprint + " am am testing a call");
   rp({
     method: "GET",
     uri: "http://pillbox.nlm.nih.gov/PHP/pillboxAPIService.php",
     qs: {
       key: "F2IWKICTOM",
           imprint: res.body.imprint
         }
       })
       // .then(response => console.log(response))
       .then(function(response) {
         // console.log(response + " 1");
         parseString(response, function (err, result) {
             console.log(JSON.stringify(result.Pills.pill[0].RXSTRING[0]));
         });
         console.log(response.body)
         // return response.body
       })
       .catch(err => console.log(err));

  // console.log(req.params.msg);
});

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
