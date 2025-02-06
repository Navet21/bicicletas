var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//Swagger
var swaggerJsdoc = require("swagger-jsdoc");
var swaggerUi = require("swagger-ui-express");


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var bicicletasAPIRouter = require('./routes/api/bicicletas');

var cors = require('cors');
const { METHODS } = require('http');
var app = express();

const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Bicicles Express API with Swagger", 
      version: "0.1.0",
      description:
        "Api para la clase de DPL de DAW en Majada Marcial",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Navet21",
        url: "https://navet21.com",
        email: "pablosantanaftv@hotmail.com",
      },
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./routes/*.js", "./models/*.js", './controllers/api/*.js'],
};

const specs = swaggerJsdoc(options);


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors({
  /*' https://navet21.github.io*/
  origin :'http://localhost:8080/',
  METHODS: 'GET, POST, PUT, DELETE',
  allowedHeaders: "Content-Type, Authorization" 
}))

app.use('/', indexRouter);
app.use('/users', usersRouter);

//Bicicletas

app.use('/api/bicicletas', bicicletasAPIRouter); 

//Documentacion

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

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
