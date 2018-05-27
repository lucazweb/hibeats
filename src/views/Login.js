import React, { Component } from 'react';
import logo from '../img/logo_login.png';
import SpotifyLogo from '../img/spotify.svg';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {};
    this.client_id = 'ac1dd07bfcc44091a99738a12eccb55c';
    this.redirect_uri = 'http://www.lucazweb.com.br/hibeats';
  }

  logar = () => {
    window.location.href = 'https://accounts.spotify.com/authorize?client_id=' + this.client_id + '&scope=playlist-read-private%20playlist-read-collaborative%20playlist-modify-public%20user-read-recently-played%20playlist-modify-private%20ugc-image-upload%20user-follow-modify%20user-follow-read%20user-library-read%20user-library-modify%20user-read-private%20user-read-email%20user-top-read%20user-read-playback-state%20user-read-playback-state&response_type=token&redirect_uri=' + this.redirect_uri;
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-10 col-sm-10 col-lg-4 col-center login-box">
            <div className="login-logo" style={{ backgroundImage: `url(${logo})` }} />
            <button onClick={this.logar} className="btn btn-success btn-login-spotify btn-lg btn-block">  <span><SpotifyLogo width={30} /> Entrar com Spotify </span></button>
          </div>
        </div>
      </div>
    );
  }
}

