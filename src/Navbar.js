import React, { Component } from 'react';
import { Link, HashRouter } from 'react-router-dom';
//import { render } from 'react-dom';

export default class Navbar extends Component {
  render() {
    return (
      <HashRouter>
        <div className="nav-buttons">
          <Link to={'/'}>
            <div>Home</div>
          </Link>
          <Link to={'users'}>
            <div>Users</div>
          </Link>
          <Link to={'/users/add'}>
            <div>Add A User</div>
          </Link>
        </div>
      </HashRouter>
    );
  }
}
