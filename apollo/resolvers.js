
import { Parser } from 'graphql/language/parser';
import users from '../pages/api/users.json'

export const resolvers = {
    Query: {
        users() {
          return users
        },
        user(_parent, { username }) {
          return users.find((user) => user.username === username)
        },
        userById(_parent, { id }) {
            return users.find((user) => parseInt(user.id) === parseInt(id))
        }
      },
    Mutation: {
        async addUser(_arent, args) {
            const id = users.length + 1;
            return users.push({
                id,
                name: args.user.name, 
                email: args.user.email
            })
        }
    }
  }



