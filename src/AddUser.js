import React, { Component } from 'react';

export default class Users extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      lastUser: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.id != 'add') {
      this.setState({ name: this.props.user.name });
    }
  }

  componentDidUpdate() {
    if (
      this.props.prepopUser != this.state.lastUser &&
      this.props.id != 'add'
    ) {
      this.setState({ lastUser: this.props.prepopUser });
      this.setState({ name: this.props.prepopUser });
    }
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.props.id == 'add') {
      this.props.addUser({ name: this.state.name });
    } else {
      this.props.updateUser({ name: this.state.name }, this.props.id);
    }
    this.setState({ name: '' });
  }

  render() {
    const { id } = this.props;
    return (
      <div>
        <h1>
          {id == 'add' ? 'Create ' : 'Update a '}
          User
        </h1>
        <hr />
        <form onSubmit={this.handleSubmit}>
          <p>Name: </p>
          <input
            type="text"
            name="user"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <button type="submit" disabled={!this.state.name}>
            {id == 'add' ? 'Create' : 'Update'}
          </button>
        </form>
      </div>
    );
  }
}
