import React, { Component } from 'react';

import api from './api';

class App extends Component {

  state= {
    usuarios: [],
  }

  async componentDidMount(){
    const response = await api.get('/api/users');
    console.log(response.data);

    this.setState({ usuarios: response.data });
  }
  

  render() {
    return (
      <div>
        <h1>Usuários</h1>
      </div>
    );
  }
}


export default App;
