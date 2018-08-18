import * as React from 'react'
import '../configure'
import {createUser, getUsers} from '../graphql'

export default class extends React.Component<undefined, State> {
  readonly state = {
    users: null,
    email: ''
  }

  render() {
    return (
      <div>
        Hello world!<br/>
        {this.state.users && <pre>{JSON.stringify(this.state.users, null, 2)}</pre>}
        <form onSubmit={this.handleOnSubmit}>
          <input
            type="text"
            value={this.state.email}
            onChange={this.handleOnChangeEmail}
          />
          <button>추가</button>
        </form>
      </div>
    )
  }

  async componentDidMount() {
    this.users()
  }

  async users(): Promise<void> {
    this.setState({users: await getUsers()})
  }

  handleOnChangeEmail = (e) => {
    this.setState({email: e.target.value})
  }

  handleOnSubmit = async (e) => {
    e.preventDefault()
    await createUser(this.state.email)
    this.users()
  }
}

interface State {
  users: any[] | null
  email: string
}

