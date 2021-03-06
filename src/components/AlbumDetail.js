import React, { Component } from 'react';
import propTypes from 'prop-types';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faMusic from '@fortawesome/fontawesome-free-solid/faMusic';
import faStar from '@fortawesome/fontawesome-free-solid/faStar';

export default class AlbumDetail extends Component {
  constructor() {
    super();
    this.state = { album: [] };
  }

  componentWillReceiveProps(newProps) {
    this.setState({ album: newProps.album });
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
