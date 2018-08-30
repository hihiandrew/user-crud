import React, { Component } from 'react';
import { render } from 'react-dom';
import Axios from 'axios';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    Axios.get('/api/users/').then(resp => {
      this.setState({ users: resp.data });
    });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.users.map(user => {
            return <li>{user.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

const app = document.getElementById('app');
render(<Main />, app);
