var express = require('express');
var router = express.Router();
var rp = require('request-promise')
var parseString = require('xml2js').parseString;
//Require controllers
var patientsController = require('../controllers/patients');

// // Require token authentication.
var token = require('../config/token_auth');

// // root path:
// router.get('/', patientsController.index);
// // router.put('/patients/:id', patientsController.update);
// // router.post('/patients', patientsController.create);
// // router.delete('/patients/:id', patientsController.destroy);

// // users resource paths:
// router.post('/patients',    usersCtrl.create);
// router.get( '/patients/me', token.authenticate, patientsController.me);
// router.post('/token',    token.create);
// //


//API
// router.get('/api/patients',patientsController.index);
router.get('/api/patients/:id',patientsController.show);
router.put('/api/patients/:id', patientsController.update);
router.post('/api/patients', patientsController.create);
// router.delete('/api/patients/:id', patientsController.destroy);

router.put('/sillytest',function(req,res){
    // console.log(res.body.imprint + " am am testing a call");
   rp({
     method: "GET",
     uri: "http://pillbox.nlm.nih.gov/PHP/pillboxAPIService.php",
     qs: {
       key: "F2IWKICTOM",
           imprint: req.body.imprint
         }
       })
       // .then(response => console.log(response))
       .then(function(response) {
         // console.log(response + " 1");
         parseString(response, function (err, result) {
             console.log(JSON.stringify(result.Pills.pill[0].RXSTRING[0]));
              res.json((JSON.stringify(result.Pills.pill[0].RXSTRING[0])));
         });
         console.log(response.body)
         // return response.body
       })
       .catch(err => console.log(err));

  // console.log(req.params.msg);
});



router.route('/api/patients/me')
  .get(token.authenticate, patientsController.me);

router.route('/api/token')
  .post(token.create);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendfile('public/index.html');
});
router.get('*', function(req, res, next) {
  res.sendFile('/');
});

module.exports = router;
