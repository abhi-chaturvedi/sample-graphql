const { gql } = require('apollo-server');
const typeDef = gql`
    type Todo{
        _id : ID! 
        task : String!
        status : Int!
    }
    
    input TodoInput{
        task : String!
        status : Int!
    }

    type Query {
        todo : [Todo]
        singleTodo(_id : ID!): Todo
    }

    type Mutation {
        createTodo(todo : TodoInput!) : Todo!  
        updateTodo(todo : TodoUpdate) : Todo!
        deleteTodo(_id : ID!) : Boolean 
    }

    input TodoUpdate{
        _id : ID!
        task : String
        status : Int
    }

`

module.exports = typeDef ;
