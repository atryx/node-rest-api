var express = require('express');
var router = express.Router();


var bookmark = require('../controllers/BookmarkController.js');

/* GET ALL BOOKMARKS */
router.get('/', function (req, res, next) {
  bookmark.list(req, res);
});

/* GET SINGLE BOOKMARK BY ID */
router.get('/show/:id', function(req, res, next){
  bookmark.show(req, res);
});

router.get('/create', function(req, res, next){
  bookmark.create(req, res);
});


/* SAVE BOOKMARK */
router.post('/save', function(req, res, next) {
  bookmark.save(req, res);
});


router.get('/edit/:id', function(req,res,next){
  bookmark.edit(req, res);
});

/* UPDATE BOOKMARK */
router.post('/update/:id', function(req, res, next) {
  bookmark.update(req, res);
});

/* DELETE BOOKMARK */
router.delete('/delete/:id', function(req, res, next) {
  bookmark.delete(req, res);
});

module.exports = router;
