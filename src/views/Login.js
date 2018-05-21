import React, { Component } from 'react';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {};
  }

  logar() {
    window.location.href = 'https://accounts.spotify.com/authorize?client_id=ac1dd07bfcc44091a99738a12eccb55c&scope=playlist-read-private%20playlist-read-collaborative%20playlist-modify-public%20user-read-recently-played%20playlist-modify-private%20ugc-image-upload%20user-follow-modify%20user-follow-read%20user-library-read%20user-library-modify%20user-read-private%20user-read-email%20user-top-read%20user-read-playback-state%20user-read-playback-state&response_type=token&redirect_uri=http://localhost:8080';
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-center login-box">
              <h1>hiBeats</h1>
              <button onClick={this.logar} className="btn btn-success btn-lg btn-block"> Entrar com Spotify</button>
              <p className="text-center">
                <a>Entrar com minha conta HiBeats</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

