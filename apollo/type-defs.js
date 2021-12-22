import { gql } from '@apollo/client'

export const typeDefs = gql`
  type Query {
    users: [User!]!
    user(username: String): User
    userById(id: ID): User
  }
  type User {
    id: ID!,
    name: String
    username: String
    email: String
    password: String
    address: Address
  }
  type Address {
    street: String
    suite: String
    city: String
    zipcode: String
    geo: Geo
  }
  type Geo {
    lat: String
    lng: String
  }

  input UserInput {
    name: String!
    email: String!
  }

  type Mutation {
    addUser(user: UserInput!): Boolean!
  }
`

// {
//   "id": 1,
//   "name": "Leanne Graham",
//   "username": "Bret",
//   "email": "Sincere@april.biz",
//   "password" : "Sincere@april.biz",
//   "address": {
//     "street": "Kulas Light",
//     "suite": "Apt. 556",
//     "city": "Gwenborough",
//     "zipcode": "92998-3874",
//     "geo": {
//       "lat": "-37.3159",
//       "lng": "81.1496"
//     }
//  }