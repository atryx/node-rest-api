var express = require('express');
var router = express.Router();


var bookmark = require('../controllers/BookmarkController.js');


router.get('/',  bookmark.list);

router.get('/show/:id', bookmark.show);

router.get('/create', bookmark.create);

router.post('/save',bookmark.save);

router.get('/edit/:id', bookmark.edit);

router.post('/update/:id', bookmark.update);

router.delete('/delete/:id',bookmark.delete);

module.exports = router;
