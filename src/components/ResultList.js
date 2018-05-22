import React, { Component } from 'react';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import faStar from '@fortawesome/fontawesome-free-solid/faStar';
import faFire from '@fortawesome/fontawesome-free-solid/faFire';
import faThumbsUp from '@fortawesome/fontawesome-free-solid/faThumbsUp';
import faHearth from '@fortawesome/fontawesome-free-solid/faHeart';
import faMeh from '@fortawesome/fontawesome-free-solid/faMeh';


export default class ResultList extends Component {
  constructor() {
    super();
    this.state = { lista: [] };
  }

  render() {
    return (
      <ul className="result-list">
        <li>
          <img className="img-circle" src="https://upload.wikimedia.org/wikipedia/en/3/3e/Black_ice_red.jpg" alt="" />
          <div className="item-info">
            <h3>Nome do Artista</h3>
            <p>Rock, Metal, Hardcore <label>Cool</label></p>
          </div>
          <div className="popularity hot"> <FontAwesomeIcon icon={faFire} /> Hot </div>
        </li>
      </ul>
    );
  }
}
