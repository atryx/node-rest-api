var express = require('express');
var router = express.Router();


var bookmark = require('../controllers/BookmarkController.js');


router.get('/',  function(req, res) {
  bookmark.list(req, res);
});
router.get('/:id', bookmark.read);

router.post('/', function(req, res, next){
  bookmark.create(req, res);
});
router.put('/:id',function(req, res, next){
  bookmark.update(req, res);
});
router.delete('/:id',function(req, res, next) {
  bookmark.delete(req, res);
});

module.exports = router;
