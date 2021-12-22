
import { Parser } from 'graphql/language/parser';
import users from '../pages/api/users.json'

export const resolvers = {
    Query: {
        users() {
          return users
        },
        user(_parent, { username }) {
          return users.find((user) => user.username === username)
        }
      },
    Mutation: {
        async addUser(_arent, args) {
            const id = users.length + 1;
            users.push({
                id,
                name: user.name, 
                email: user.email
            })
            return users.find((user) => parseInt(user.id) === parseInt(id))
        }
    }
  }



