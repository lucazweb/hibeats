import React, { Component } from 'react';
import AlbumDetail from '../components/AlbumDetail';
import Sidebar from '../components/Sidebar';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faMusic from '@fortawesome/fontawesome-free-solid/faMusic';
import faStar from '@fortawesome/fontawesome-free-solid/faStar';


export default class Album extends Component {
  constructor() {
    super();
    this.token = sessionStorage.getItem('x-access-token');
    this.images = [];
    this.tracks = [];
    this.artists = [];
    this.addAsFavorite = this.addAsFavorite.bind(this);
    this.state = { album: '' };
  }

  componentDidMount() {
    console.log(this.props.match.params.id);
    const request = new Request(`https://api.spotify.com/v1/albums/${this.props.match.params.id}`, {
      headers: new Headers({
        Authorization: `Bearer ${this.token}`,
      }),
    });

    fetch(request)
      .then(response => response.json())
      .then((data) => {
        // Tive um contratempo ao tentar acessas os arrays do obj diretamente do render()
        // --> Error: Objects are not valid as a React child"
        // Passando elementos para um array criado ao iniciar o componente;
        console.log(data);

        data.images.map((img) => {
          this.images.push(img.url);
        });

        data.artists.map((artist, index) => {
          this.artists.push({
            key: index,
            name: artist.name,
          });
        });

        data.tracks.items.map((track, index) => {
          this.tracks.push({
            key: index,
            name: track.name,
          });
        });

        this.setState({ album: data });
      });
  };

  /* !!!!! Implementar direito */
  addAsFavorite(){
    let favorites = localStorage.getItem('hibeats-favorites');

    let album = {
      id: this.state.album.id,
      name: this.state.album.name,
      image: this.state.album.images[0].url,
    };

    if(favorites !== null){
      favorites.push(album);
    }else{
      localStorage.setItem('hibeats-favorites', JSON.stringify(album));
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <div className="col-md-10">
            <div className="album-detail">
              <h2>{this.state.album.name} </h2>
              <div className="row">
              <div className="col-md-4 no-padding">
                <div className="album-info">
                  <img alt="" className="img" src={this.images[0]} />
                  <p>
                  {
                    this.artists.map(artist => (
                      <span key={artist.key}>{artist.name}, </span>
                    ))
                  }
                  </p>

                  <button onClick={this.addAsFavorite} className="btn btn-block btn-favorite"> <FontAwesomeIcon icon={faStar} /> Adicionar aos favoritos</button>
                </div>
              </div>
              <div className="col-md-8">
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

