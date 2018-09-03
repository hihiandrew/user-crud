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
      selectUser: '',
      updated: false,
    };
    this.deleteUser = this.deleteUser.bind(this);
    this.addUser = this.addUser.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.prepopUser = this.prepopUser.bind(this);
  }

  componentDidMount() {
    Axios.get('/api/users/').then(resp => {
      this.setState({ users: resp.data });
    });
  }

  deleteUser(user) {
    Axios.delete(`/api/users/${user.id}`)
      .then(resp => {
        this.setState({ users: resp.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  addUser(user) {
    Axios.post('/', user)
      .then(resp => {
        this.setState({
          users: [...this.state.users, resp.data],
        });
      })
      .catch(err => console.log(err));
  }

  updateUser(user, id) {
    Axios.put(`/api/users/${id}`, user)
      .then(resp => {
        const updatedUsers = this.state.users.map(user => {
          user.id === id * 1 ? resp.data : user;
        });
        this.setState({
          users: updatedUsers,
        });
      })
      .catch(err => console.log(err));
  }

  prepopUser(selectUser) {
    this.setState({ selectUser });
  }

  render() {
    return (
      <HashRouter>
        <div>
          <Navbar users={this.state.users} prepopUser={this.prepopUser} />
          <Route
            path="/users"
            users={this.state.users}
            render={() => {
              return (
                <Users
                  users={this.state.users}
                  deleteUser={this.deleteUser}
                  prepopUser={this.prepopUser}
                />
              );
            }}
          />
          <Route
            exact
            path="/users/:id"
            render={({ location }) => {
              const id = location.pathname.split('/').pop();
              const user = this.state.users.find(user => user.id === id * 1);
              return (
                <AddUser
                  id={id}
                  user={user}
                  addUser={this.addUser}
                  updateUser={this.updateUser}
                  prepopUser={this.state.selectUser}
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
