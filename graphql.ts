import {API as _API, graphqlOperation} from 'aws-amplify'

//xxx: type error workaroud
const API: any = _API

export const getUsers = () => API
  .graphql(graphqlOperation(queryUsers))
  .catch(_ => [])

export const createUser = (email) => API
  .graphql(graphqlOperation(mutationCreateUser, {email}))
  .catch(_ => null)

const queryUsers = `query DeptnoUsers {
  listDeptnoUsers {
    items {
      email
    }
    nextToken
  }
}`

const mutationCreateUser = `mutation CreateDeptnoUser($email: String!) {
  createDeptnoUser(input: {email: $email}) {
    email
  }
}`