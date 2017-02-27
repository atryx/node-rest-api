var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Bookmark = require('../models/Bookmark.js');

/* GET ALL BOOKMARKS */
router.get('/', function (req, res, next) {
  Bookmark.find(function(err, bookmarks) {
    if(err) return next(err);
    res.json(bookmarks);
  });
});

/* GET SINGLE BOOKMARK BY ID */
router.get('/:id', function(req, res, next){
  Bookmark.findById(req.params.id, function(err, bookmark) {
    if(err) return next(err);
    console.log(bookmark);
    res.json(bookmark);
  });
});


/* SAVE BOOKMARK */
router.post('/', function(req, res, next) {
  Bookmark.create(req.body, function (err, bookmark) {
    console.log(bookmark);
    if (err) return next(err);
    console.log(bookmark);
    res.json(bookmark);
  });
});

/* UPDATE BOOKMARK */
router.put('/:id', function(req, res, next) {
  Bookmark.findByIdAndUpdate(req.params.id, req.body, function (err, bookmark) {
    if (err) return next(err);
    res.json(bookmark);
  });
});

/* DELETE BOOKMARK */
router.delete('/:id', function(req, res, next) {
  Bookmark.findByIdAndRemove(req.params.id, req.body, function (err, bookmark) {
    if (err) return next(err);
    res.json(bookmark);
  });
});

module.exports = router;
