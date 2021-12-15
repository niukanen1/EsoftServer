const { gql } = require('apollo-server'); 

const typeUser = gql` 
    type User { 
        id: int!, 
        email: String!, 
        phone: String, 
        firstName: String!, 
        lastName: String!, 
    }, 

    type Query { 
        getAllUsers: [User!]!, 

    }
`