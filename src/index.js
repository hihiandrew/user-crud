import React, { Component } from 'react';
import { render } from 'react-dom';
import Axios from 'axios';
import Navbar from './Navbar';
import Users from './Users';
import AddUser from './AddUser';
import { HashRouter, Route } from 'react-router-dom';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      newUser: '',
    };
    this.handleDel = this.handleDel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    Axios.get('/api/users/').then(resp => {
      this.setState({ users: resp.data });
    });
  }

  handleDel(user) {
    Axios.delete(`/api/users/${user.id}`)
      .then(resp => {
        this.setState({ users: resp.data });
      })
      .then(() => {
        console.log(`${user.name} deleted.`);
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ newUser: event.target.value });
  }

  handleSubmit() {
    Axios.post('/', { name: this.state.newUser })
      .then(resp => {
        this.setState({
          users: [...this.state.users, resp.data],
          newUser: '',
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <HashRouter>
        <div>
          <Navbar
            handeHome={this.handleHome}
            handleUsers={this.handleUsers}
            handleAdd={this.handleAdd}
          />
          <Route
            path="/users"
            users={this.state.users}
            render={() => {
              return (
                <Users users={this.state.users} handleDel={this.handleDel} />
              );
            }}
          />
          <Route
            exact
            path="/users/add"
            render={() => {
              return (
                <AddUser
                  handleSubmit={this.handleSubmit}
                  handleChange={this.handleChange}
                  newUser={this.state.newUser}
                />
              );
            }}
          />
        </div>
      </HashRouter>
    );
  }
}

const app = document.getElementById('app');
render(<Main />, app);
