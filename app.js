var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const { graphqlHTTP } = require('express-graphql') 
const { makeExecutableSchema } = require('@graphql-tools/schema') 
const { ApolloServer , gql } = require('apollo-server');

var indexRouter = require('./routes/index');
require('./routes/dbconnection')
var app = express();

// allowing access to all 
app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
  res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');
  next(); 
})

const typeDefs = require('./routes/typeDefs');
const resolvers = require('./routes/resolvers');
const models = require('./routes/models') 
console.log('mnodels : ', models);

const server = new ApolloServer({ typeDefs, resolvers , context : {...models} });


server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);

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
