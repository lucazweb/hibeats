import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import SpotifyWebApi from 'spotify-web-api-js';
import history from './history';
import Login from './views/Login';
import Home from './views/Home';

const spotifyApi = new SpotifyWebApi();

export default class App extends Component {
  constructor() {
    super();
    const params = this.getHashParams();
    this.token = params.access_token;
    this.state = { isLogged: false };
    this.isLogged = this.isLogged.bind(this);
  }

  componentDidMount() {
    if (this.token) {
      spotifyApi.setAccessToken(this.token);
      sessionStorage.setItem('x-access-token', this.token);
      // Verificar Token
      this.isLogged(this.token);
    }
  }

  getHashParams() {
    const hashParams = {};
    let e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    e = r.exec(q);
    while (e) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
      e = r.exec(q);
    }
    return hashParams;
  }

  isLogged(token) {
    console.log(token);
    const request = new Request('https://api.spotify.com/v1/me', {
      headers: new Headers({
        Authorization: `Bearer ${token}`,
      }),
    });

    fetch(request)
      .then((response) => {
        if (!response.ok) {
          history.push('/');
          throw new Error('Não autorizado');
          this.setState({ isLogged: false });
        }else {
          this.setState({ isLogged: true });
          console.log(this.state.isLogged);
          history.push('/home');
        }
        return response.json();
      }).then((data) => { console.log(data); }).catch((error) => { console.log(error.message); });

    return this.state.isLogged;
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/home" render={() => (this.state.isLogged ? <Home /> : <Redirect to="/" />)} />
      </Switch>
    );
  }
}
