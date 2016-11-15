import React from 'react';
import { connect } from 'react-redux'
import './App.css'

import * as usersActions from './actions/usersActions'

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUser(user) {
    return (
      <div className="UserCard" key={user.id}>
        <h4>{user.name}</h4>
        <p>{user.company.name}</p>
        <a href={`//${user.website}`}>{user.website}</a>
      </div>
    )
  }

  render() {
    return <div>{this.props.users.map(this.renderUser)}</div>
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps, usersActions)(App)
