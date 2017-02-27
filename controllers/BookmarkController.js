var mongoose = require('mongoose');
var Bookmark = require("../models/Bookmark.js");

var bookmarkController = {};

bookmarkController.list = function(req, res) {
    Bookmark.find({}).exec(function(err, bookmarks) {
        if (err) {
            console.log("Error: ", err);
        } else {
            res.render("../views/bookmarks/index", {bookmarks: bookmarks});
        }
    });
};

bookmarkController.show = function(req, res) {
    Bookmark.findOne({_id: req.params.id}).exec(function(err, bookmark) {
        if (err) {
            console.log("Error: ", err);
        } else {
            res.render("../views/bookmarks/show", {bookmark: bookmark});
        }
    });
};

bookmarkController.create = function(req, res) {
    res.render("../view/bookmarks/create");
};

bookmarkController.save = function(req, res) {
    var bookmark = new Bookmark(req.body);

    bookmark.save(function(err) {
        if (err) {
            console.log("Error: ", err);
            res.render("../view/bookmarks/create");
        } else {
            console.log("Succesfully created bookmark");
            res.render("/bookmarks/show/" + bookmark._id);
        }
    });
};

bookmarkController.edit = function(res, req) {
    Bookmark.findOne({_id: req.params.id}).exec(function(err, bookmark) {
        if (err) {
            console.log("Error: ", err);
        } else {
            res.render("../views/bookmarks/edit", {bookmark: bookmark});
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
            res.render("../views/bookmarks/edit", {bookmark: req.body});
        }
        res.redirect("/bookmarks/show/" + bookmark._id);
    });
};

bookmarkController.delete = function(req, res) {
    Bookmark.remove({
        _id: req.params.id
    }, function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Bookmark deleted!");
            res.redirect("/bookmarks");
        }
    });
};

module.exports = bookmarkController;
