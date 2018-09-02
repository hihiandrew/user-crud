import React, { Component } from 'react';

export default class Users extends Component {
  render() {
    const { handleSubmit, handleChange, newUser } = this.props;
    return (
      <div>
        <h1>Create A User</h1>
        <hr />
        <form onSubmit={handleSubmit}>
          <p>Name: </p>
          <input
            type="text"
            name="userName"
            value={newUser}
            onChange={handleChange}
          />
          <button type="submit" disabled={!newUser}>
            Create
          </button>
        </form>
      </div>
    );
  }
}
