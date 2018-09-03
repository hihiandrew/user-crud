import React, { Component } from 'react';
import { Link, HashRouter } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    const { users } = this.props;
    return (
      <HashRouter>
        <div className="nav-buttons">
          <Link to={'/'}>
            <div className="nav-btn">Home</div>
          </Link>
          <Link to={'/users'}>
            <div className="nav-btn">Users ({users.length})</div>
          </Link>
          <Link to={'/users/add'} onClick={() => this.props.prepopUser('')}>
            <div className="nav-btn">Add A User</div>
          </Link>
        </div>
      </HashRouter>
    );
  }
}
