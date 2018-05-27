import React, { Component } from 'react';
import history from '../history';
import Sidebar from '../components/Sidebar';
import AddAsFavorite from '../components/AddAsFavorite';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faMusic from '@fortawesome/fontawesome-free-solid/faMusic';

export default class Album extends Component {
  constructor() {
    super();
    this.token = sessionStorage.getItem('x-access-token');
    this.images = [];
    this.tracks = [];
    this.artists = [];
    this.state = { album: '' };
  }

  componentDidMount() {
    const request = new Request(`https://api.spotify.com/v1/albums/${this.props.match.params.id}`, {
      headers: new Headers({
        Authorization: `Bearer ${this.token}`,
      }),
    });

    fetch(request)
      .then(response =>  response.json())
      .then((data) => {
        data.images.forEach((img) => {
          this.images.push(img.url);
        });

        data.artists.forEach((artist, index) => {
          this.artists.push({
            key: index,
            name: artist.name,
          });
        });

        data.tracks.items.forEach((track, index) => {
          this.tracks.push({
            key: index,
            name: track.name,
          });
        });
        this.setState({ album: data });
      });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <div className="col-lg-10 col-sm-12 col-xs-12">
            <div className="album-detail">
              <h2>{this.state.album.name} </h2>
              <div className="row">
                <div className="col-lg-4 col-sm-12 col-xs-12 no-padding">
                  <div className="album-info">
                    <img alt="" className="img" src={this.images[0]} />
                    <p>
                      {
                    this.artists.map(artist => (
                      <span key={artist.key}>{artist.name}, </span>
                    ))
                  }
                    </p>
                    <AddAsFavorite favorite={this.state.album} category="albuns" />
                  </div>
                </div>
                <div className="col-lg-8 col-sm-12 col-xs-12">
                  <ul className="track-list">
                    {
                    this.tracks.map(track => (
                      <li key={track.key}> <FontAwesomeIcon icon={faMusic} /> {track.name}  </li>
                    ))
                  }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

