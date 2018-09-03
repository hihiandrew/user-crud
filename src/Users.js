import React, { Component } from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';

export default class Users extends Component {
  render() {
    const { users, deleteUser, prepopUser } = this.props;
    return (
      <div>
        <h1>Users</h1>
        <hr />
        {users.map(user => {
          return (
            <div key={user.id}>
              <hr />
              <Link
                to={`/users/${user.id}`}
                onClick={() => prepopUser(user.name)}
              >
                {user.name}
              </Link>
              <div>
                <div onClick={() => deleteUser(user)}>X</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
