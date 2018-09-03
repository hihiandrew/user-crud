import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Users extends Component {
  render() {
    const { users, deleteUser, prepopUser } = this.props;
    return (
      <div className="users">
        <h1>Users</h1>
        <div>
          <hr />
        </div>

        {users.map(user => {
          return (
            <div className="user-btn" key={user.id}>
              <div className="user-link">
                <Link
                  to={`/users/${user.id}`}
                  onClick={() => prepopUser(user.name)}
                >
                  {user.name}
                </Link>
              </div>
              <div className="del-btn" onClick={() => deleteUser(user)}>
                X
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
