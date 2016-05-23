var express = require('express');
var router = express.Router();

var showsController = require('../controllers/shows');

router.route('/api/shows')
  .get(showsController.index)
  .post(showsController.create);

router.route('/api/shows/:id')
  .get(showsController.show)
  .put(showsController.update)
  .delete(showsController.destroy);

/* GET home page. */
router.get('*', function(req, res, next) {
  res.sendFile('public/index.html');
});

module.exports = router;
