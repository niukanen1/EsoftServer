const { gql } = require('apollo-server'); 

const typeDefs = gql` 
    type User { 
        id: Int!, 
        email: String!, 
        phone: String, 
        firstName: String!, 
        lastName: String!, 
    }, 

    type Query { 
        getAllUsers: [User!]!, 

    }
`

module.exports = {typeDefs};