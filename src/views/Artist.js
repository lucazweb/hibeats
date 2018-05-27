import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import AddAsFavorite from '../components/AddAsFavorite';

export default class Album extends Component {
  constructor() {
    super();
    this.token = sessionStorage.getItem('x-access-token');
    this.state = { artist: '', artistAlbums: [] };
  }

  componentDidMount() {
    /* [PARAMETROS RECEBIDOS] */
    console.log(this.props.match.params.id);

    const request = new Request(`https://api.spotify.com/v1/artists/${this.props.match.params.id}`, {
      headers: new Headers({
        Authorization: `Bearer ${this.token}`,
      }),
    });

    const albumRequest = new Request(`https://api.spotify.com/v1/artists/${this.props.match.params.id}/albums`, {
      headers: new Headers({
        Authorization: `Bearer ${this.token}`,
      }),
    });

    fetch(request)
      .then(response => response.json())
      .then((data) => {
        this.setState({ artist: data });
        fetch(albumRequest)
          .then(response => response.json())
          .then((albuns) => {
            this.setState({ artistAlbums: albuns.items });
          });
      });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <div className="col-sm-12 col-xs-12 col-lg-10">
            <div className="artist-detail">
              <h2>{this.state.artist.name}</h2>
              <div className="favorite-ctrl">
                <AddAsFavorite favorite={this.state.artist} category="artists" />
              </div>
              <ul className="result-list result-list--album">
                {
                  this.state.artistAlbums.map(album => (
                    <Link to={`/album/${album.id}`}>
                      <li>
                        {
                        album.images.length > 0 && <img className="img-circle" src={album.images[0].url} alt="" />
                      }
                        <div className="item-info">
                          <h3>{album.name}</h3>
                        </div>
                      </li>
                    </Link>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

