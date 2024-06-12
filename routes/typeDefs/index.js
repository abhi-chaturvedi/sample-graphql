const { mergeTypes } = require("merge-graphql-schemas");

const User = require('./userTypes') ;
const Todo = require('./todoTypes') ;

const typeDefs = [User, Todo];

module.exports =  mergeTypes(typeDefs, { all: true });