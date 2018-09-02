import React, { Component } from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';

export default class Users extends Component {
  render() {
    const { users, handleDel } = this.props;
    return (
      <div>
        <h1>Users</h1>
        <hr />
        {users.map(user => {
          return (
            <div className="single-user" key={user.id}>
              <hr />
              <Link to={`/users/${user.id}`}>{user.name}</Link>
              <div>
                <div className="del-btn" onClick={() => handleDel(user)}>
                  X
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
