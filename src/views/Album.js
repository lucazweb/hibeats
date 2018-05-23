import React, { Component, Fragment } from 'react';
import AlbumDetail from '../components/AlbumDetail';
import Sidebar from '../components/Sidebar';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faMusic from '@fortawesome/fontawesome-free-solid/faMusic';
import faStar from '@fortawesome/fontawesome-free-solid/faStar';


export default class Album extends Component {
  constructor() {
    super();
    this.album = {};
    this.tracks = [];
    this.token = sessionStorage.getItem('x-access-token');
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
        console.log(data);
        console.log(data.tracks.items);
        this.album = data;
        this.setState({ album: data });
        this.tracks = this.state.album.tracks.items;

      });
  }

  render() {
    return (
      <Fragment>
        <div className="row">
          <Sidebar />
          <div className="col-md-10">
            <div className="album-detail">
              <h2>{this.album.name}</h2>
              <div className="album-info">
                <img alt="" className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr6GqFzLgE4nI7HX5mclX1XDPxwZJgno1tDW0WCOm2QM6GKtE4" />
                <h2>Californication</h2>
                <p>Red Hot Chili Peppers</p>
                <button className="btn btn-block btn-favorite"> <FontAwesomeIcon icon={faStar} /> Adicionar aos favoritos</button>
              </div>

              <ul className="track-list">
                <li><FontAwesomeIcon icon={faMusic} /> Track name  </li>
              </ul>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

