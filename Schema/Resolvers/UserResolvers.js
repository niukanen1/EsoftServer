const {RunDBConnect} = require('../../database'); 

const users = RunDBConnect(); 

const resolvers = { 
    Query: { 
        getAllUsers: () => users,
    }
}

module.exports = {resolvers}