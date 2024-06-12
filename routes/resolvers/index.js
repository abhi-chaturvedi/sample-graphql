const { mergeResolvers } =  require("merge-graphql-schemas") ;

const User = require("./userResolvers");
const Todo = require("./todoResolvers") ;

const resolvers = [User, Todo];

module.exports = mergeResolvers(resolvers);   