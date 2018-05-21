import React, { Component } from 'react';
import Header from './components/Header';
import Lista from './components/Lista';
import Toggle from './components/Toggle';
import SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();

export default class App extends Component {
  constructor() {
    super();
    const params = this.getHashParams();
    const token = params.access_token;

    if (token) {
      spotifyApi.setAccessToken(token);
    }

    this.state = {
      loggedIn: !!token,
      lista: [],
    };
    this.browse = this.browse.bind(this);
    this.toggleString = this.toggleString.bind(this);
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

  logar() {
    window.location.href = 'https://accounts.spotify.com/authorize?client_id=ac1dd07bfcc44091a99738a12eccb55c&scope=playlist-read-private%20playlist-read-collaborative%20playlist-modify-public%20user-read-recently-played%20playlist-modify-private%20ugc-image-upload%20user-follow-modify%20user-follow-read%20user-library-read%20user-library-modify%20user-read-private%20user-read-email%20user-top-read%20user-read-playback-state%20user-read-playback-state&response_type=token&redirect_uri=http://localhost:8080';
  }

  browse(evt) {
    console.log(this.filtro);
    if (this.filtro === 'Artists') {
      spotifyApi.searchArtists(evt.target.value)
        .then((data) => {
          console.log(data.artists.items);
          this.setState({ lista: data.artists.items });
        }, (err) => { console.log(err); });
    }

    if (this.filtro === 'Tracks') {
      spotifyApi.searchTracks(evt.target.value)
        .then((data) => {
          console.log(data.tracks.items);
          this.setState({ lista: data.artists.items });
        }, (err) => { console.log(err); });
    }
  }

  toggleString(evt) {
    this.filtro = evt.target.name;
    console.log(this.filtro);
  }

  render() {
    return (
      <div>
        <Header title="Hi Beats!" />
        <button onClick={this.logar}> Logar no spotify </button>
        { this.state.loggedIn &&
          <div>
            <Toggle option="Artists" toggleString={this.toggleString} />
            <Toggle option="Tracks" toggleString={this.toggleString} />
            <input onChange={this.browse} type="search" placeholder="Search.." />
          </div>
        }
        <Lista lista={this.state.lista} />
      </div>
    );
  }
}
