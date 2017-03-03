var mongoose = require('mongoose');
var Bookmark = require("../models/Bookmark.js");

var bookmarkController = {};

bookmarkController.list = function(req, res) {
    Bookmark.find({}).exec(function(err, bookmarks) {
        if (err) {
            console.log("Error: ", err);
        } else {
            res.json(bookmarks);
        }
    });
};

bookmarkController.read = function(req, res) {
    Bookmark.findOne({_id: req.params.id}).exec(function(err, bookmark) {
        if (err) {
            console.log("Error: ", err);
        } else {
            res.json(bookmark);
        }
    });
};

bookmarkController.create = function(req, res) {
    var bookmark = new Bookmark(req.body);

    bookmark.save(function(err) {
        if (err) {
            console.log("Error: ", err);
            rconsole.log("failed to save bookmark");
        } else {
            console.log("Succesfully created bookmark");
            res.json(bookmark);
        }
    });
};

bookmarkController.update = function(req, res) {
    Bookmark.findByIdAndUpdate(req.params.id, {
        $set: {
            name: req.body.name,
            desc: req.body.desc,
            url: req.body.url
        }
    }, {
        new: true
    }, function(err, bookmark) {
        if (err) {
            console.log(err);
            console.log("failed to update bookmark");
        }
        res.json(bookmark);
    });
};

bookmarkController.delete = function(req, res) {
  Bookmark.remove({_id: req.params.id}, function(err) {
    if(err) {
      console.log(err);
    }
    else {
      console.log("Bookmark deleted!");
      res.redirect("/bookmarks");
    }
  });
};

module.exports = bookmarkController;
