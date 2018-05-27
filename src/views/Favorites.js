import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import history from '../history';
import Sidebar from '../components/Sidebar';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faStar from '@fortawesome/fontawesome-free-solid/faStar';

export default class Favorites extends Component {
  constructor() {
    super();

    this.state = {
      artists: [],
      albuns: [],
      tracks: [],
      filter: 'artists',
      btnStyle: {
        artists: {
          color: '#fff',
          backgroundColor: '#545b62',
          borderColor: '#4e555b',
        },
        albuns: {},
        tracks: {},
      },
    };

    this.favStyle = { color: '#eadb24' };

    this.activeStyle = {
      color: '#fff',
      backgroundColor: '#545b62',
      borderColor: '#4e555b',
    };
  }

  componentDidMount() {
    if (!sessionStorage.getItem('x-access-token')) {
      history.push('/');
    }

    const artists = [];
    const albuns = [];
    const tracks = [];

    if (localStorage.getItem('hibeats-favorites') !== null) {
      const favorites = JSON.parse(localStorage.getItem('hibeats-favorites'));

      if (favorites.artists.length > 0) {
        favorites.artists.forEach((artist) => {
          artists.push(artist);
        });

        this.setState({ artists });
      }

      if (favorites.albuns.length > 0) {
        favorites.albuns.forEach((album) => {
          albuns.push(album);
        });

        this.setState({ albuns });
      }

      if (favorites.tracks.length > 0) {
        favorites.tracks.forEach((track) => {
          tracks.push(track);
        });

        this.setState({ tracks });
      }
    }
  }

    toggleCategory = (evt) => {
      switch (evt.target.name) {
        case 'artists':
          this.setState({
            btnStyle: {
              artists: this.activeStyle,
              albuns: {},
              tracks: {},
            },
            filter: evt.target.name,
          });
          break;

        case 'albuns':
          this.setState({
            btnStyle: {
              artists: {},
              albuns: this.activeStyle,
              tracks: {},
            },
            filter: evt.target.name,
          });
          break;

        case 'tracks':
          this.setState({
            btnStyle: {
              artists: {},
              albuns: {},
              tracks: this.activeStyle,
            },
            filter: evt.target.name,
          });
          break;
        default:
          break;
      }
    }

    render() {
      return (
        <div className="container-fluid">
          <div className="row">
            <Sidebar />
            <div className="favorites-view col-sm-12 col-xs-12 col-lg-10">
              <h2>Favorites </h2>
              <div className="favorite-btns">
                 <div className="btn-group" role="group" aria-label="Basic example">
                    <button onClick={this.toggleCategory} name="artists" type="button" style={this.state.btnStyle.artists} className="btn btn-secondary">Artists</button>
                    <button onClick={this.toggleCategory} name="albuns" type="button" style={this.state.btnStyle.albuns} className="btn btn-secondary">Albuns</button>
                    <button onClick={this.toggleCategory} name="tracks" type="button" style={this.state.btnStyle.tracks} className="btn btn-secondary">Tracks</button>
                  </div>
               </div>
              {
                        (this.state.filter === 'artists' && this.state.artists.length > 0) &&
                        (<ul className="result-list result-list--favorites-album">
                          <h3> <FontAwesomeIcon style={this.favStyle} icon={faStar} /> Favorites Artists</h3>
                          {
                        this.state.artists.map(artist => (
                          <Link key={artist.id} to={`/artist/${artist.id}`}>
                            <li>
                              {
                                artist.image && <img className="img-circle circle" src={artist.image} alt="" />
                            }
                              <div className="item-info">
                                <h3>{artist.name}</h3>
                              </div>
                            </li>
                          </Link>
                        ))
                        }
                        </ul>)
                    }
              {
                        (this.state.filter === 'artists' && this.state.artists.length === 0) &&
                            (<h3 className="search-feedback">
                                You don't have any favorites albuns yet..
                            </h3>)
                    }

              {
                        (this.state.filter === 'albuns' && this.state.albuns.length > 0) &&
                        (<ul className="result-list result-list--favorites-album">
                          <h3> <FontAwesomeIcon style={this.favStyle} icon={faStar} /> Favorites Albuns</h3>
                          {
                        this.state.albuns.map(album => (
                          <Link key={album.id} to={`/album/${album.id}`}>
                            <li>
                              {
                                album.image && <img className="img-circle" src={album.image} alt="" />
                            }
                              <div className="item-info">
                                <h3>{album.name}</h3>
                              </div>
                            </li>
                          </Link>
                        ))
                        }
                        </ul>)
                    }

              {
                        (this.state.filter === 'tracks' && this.state.tracks.length === 0) &&
                            (<h3 className="search-feedback">
                                You don't have any favorites tracks yet..
                            </h3>)
                    }
              {
                        (this.state.filter === 'tracks' && this.state.tracks.length > 0) &&
                        (<ul className="result-list result-list--favorites-album">
                          <h3> <FontAwesomeIcon style={this.favStyle} icon={faStar} /> Favorites Tracks</h3>
                          {
                        this.state.tracks.map(track => (
                          <li key={track.id}>
                            {
                                track.image && <img className="img-circle" src={track.image} alt="" />
                            }
                            <div className="item-info">
                              <h3>{track.name}</h3>
                            </div>
                          </li>

                        ))
                        }
                        </ul>)
                    }
              {
                        (this.state.filter === 'albuns' && this.state.albuns.length === 0) &&
                            (<h3 className="search-feedback">
                                You don't have any favorites albuns yet..
                            </h3>)
                    }


            </div>
          </div>
        </div>
      );
    }
}
