import React, { Component } from 'react';
import { Link, HashRouter } from 'react-router-dom';
//import { render } from 'react-dom';

export default class Navbar extends Component {
  render() {
    const { users } = this.props;
    return (
      <HashRouter>
        <div className="nav-buttons">
          <Link to={'/'}>
            <div>Home</div>
          </Link>
          <Link to={'/users'}>
            <div>Users ({users.length})</div>
          </Link>
          <Link to={'/users/add'} onClick={() => this.props.prepopUser('')}>
            <div>Add A User</div>
          </Link>
        </div>
      </HashRouter>
    );
  }
}
