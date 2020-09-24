import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonLogin from './component/buttonlogin/buttonLogin';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { datar: [] };

    this.preiaDate = this.preiaDate.bind(this);
  }

  async loginButton() {
    console.log('m-ai apasat');
    await axios
      .get('http://localhost:8000/sanctum/csrf-cookie', {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response);
      });
    await axios
      .post('http://localhost:8000/api/login', {
        email: 'eduard@test.com',
        password: 'pass',
      })
      .then((res) => {
        console.log(res);
      });
  }

  preiaDate() {
    axios
      .get('http://localhost:8000/api/addition', { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        this.setState({ datar: res.data });
        console.log(this.state.datar);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>This is the app to acces laravel</p>
          <ButtonLogin handleClick={this.loginButton} name={'Login'} />
          <ButtonLogin handleClick={this.preiaDate} name={'Preia date'} />
        </header>
        <div>
          {this.state.datar.map((rez, index) => {
            return (
              <div key={index}>
                <h3>{rez.title}</h3>
                <p>{rez.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default App;
