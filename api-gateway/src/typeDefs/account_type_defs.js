const { gql } = require('apollo-server');

const accountTypeDefs = gql `
type Account {
    username: String!
    balance: Int!
    lastChange: String!
}
extend type Query {
    accountByUsername(username: String!): Account
}`;

module.exports = accountTypeDefs;