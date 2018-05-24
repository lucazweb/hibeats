import React, { Component } from 'react';
import propTypes from 'prop-types';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faMusic from '@fortawesome/fontawesome-free-solid/faMusic';
import faStar from '@fortawesome/fontawesome-free-solid/faStar';

export default class AlbumDetail extends Component {

  constructor(){
    super();
    this.state = {album: []}
  }

  componentDidMount() {
    //console.log(this.props);
  }

  componentWillReceiveProps(newProps) {
    console.log(newProps.album);
    this.setState({ album:newProps.album });
    console.log(this.state.album);
  }


  render() {
    return (
      <div className="col-md-10">
        <div className="album-detail">
          <h2>{this.state.album.name}</h2>
          <div className="album-info">
            <img alt="" className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr6GqFzLgE4nI7HX5mclX1XDPxwZJgno1tDW0WCOm2QM6GKtE4" />
            <h2>Californication</h2>
            <p>Red Hot Chili Peppers</p>
            <button className="btn btn-block btn-favorite"> <FontAwesomeIcon icon={faStar} /> Adicionar aos favoritos</button>
          </div>

          <ul className="track-list">
            <li><FontAwesomeIcon icon={faMusic} /> Around The World</li>
          </ul>
        </div>
      </div>
    );
  }
}


/*
  convertDuration(duration) {
    const minutes = Math.floor(duration / 60000);
    const seconds = ((duration % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

    const request = new Request(`https://api.spotify.com/v1/albums/${this.props.match.params.id}/tracks`, {
      headers: new Headers({
        Authorization: `Bearer ${this.token}`,
      }),
    });

    fetch(request)
      .then(response => response.json())
      .then((data) => {
        console.log(data.items);
        this.setState({ tracks: data.items });
      });

      */
