const express      = require('express');
const path         = require('path');
const favicon      = require('serve-favicon');
const logger       = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');
const mongoose     = require('mongoose');


const index = require('./routes/index');
// const users = require('./routes/users');
const bookmarks = require('./routes/bookmarks.js');

const app = express();

const options = { promiseLibrary: require('bluebird') };
const mongodbUri = 'mongodb://admin:admin@ds143449.mlab.com:43449/fem';
// Configure conenction URL (only needs to happen once per app)
mongoose.connect(mongodbUri, options)
        .then(() =>  console.log('connection succesful'))
        .catch((err) => console.error(err));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({type:'appplication/vnd.api+json'}));
app.use(cookieParser());

app.use(express.static(path.resolve(__dirname, '..', 'build')));
app.use(express.static(path.join(__dirname, 'stylesheets')));

app.use('/', index);
// app.use('/users', users);
app.use('/bookmarks', bookmarks);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// // development error handler
// // will print stacktrace
// if (app.get('env') === 'development') {
//   app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//       message: err.message,
//       error: err
//     });
//   });
// }

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
