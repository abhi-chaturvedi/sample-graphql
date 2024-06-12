const {gql} = require('apollo-server')

const types = gql`
    type User {
        _id : ID!
        firstName : String!
        lastName : String!
        email : String!
        contact : Int!
        todo : [Todo!]
    }

    input Pagination {
        page : Int!
        limit : Int!
    }

    type Query {
        user(pagination : Pagination!) : [User]
        singleUser(_id : ID!): User
    }

    type Mutation {
        createUser(user : CreateUser!) : User!
    }

    input CreateUser{
        firstName : String!
        lastName : String!
        email : String!
        contact : Int!
    }
`


module.exports = types;