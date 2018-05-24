import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import faFire from '@fortawesome/fontawesome-free-solid/faFire';
import faThumbsUp from '@fortawesome/fontawesome-free-solid/faThumbsUp';
import faHearth from '@fortawesome/fontawesome-free-solid/faHeart';
import faMeh from '@fortawesome/fontawesome-free-solid/faMeh';


export default class ArtistsList extends Component {
  constructor() {
    super();
    this.state = { lista: [] };

  }

  artistPopularity(num) {
    if (num < 30) {
      return (
        <div className="popularity underground">
          <FontAwesomeIcon icon={faMeh} /> Underground
        </div>
      );
    } else if ((num > 30 < 59) && (num < 60)) {
      return (
        <div className="popularity regular">
          <FontAwesomeIcon icon={faThumbsUp} /> Regular
        </div>
      );
    } else if ((num >= 60 <= 79) && (num < 80)) {
      return (
        <div className="popularity cool">
          <FontAwesomeIcon icon={faHearth} /> Cool
        </div>
      );
    }
    return (
      <div className="popularity hot">
        <FontAwesomeIcon icon={faFire} /> Hot
      </div>
    );
  }

  render() {
    return (

      <ul className="result-list">

        {
          this.props.lista.map(item => (
            <Link to={`/artist/${item.id}`}>
            <li key={item.id}>
              {
               item.images.length > 0 && <div className="img" style={{ backgroundImage: 'url(' + item.images[0].url  + ')' }} alt="" />
              }
              <div className="item-info">
                <h3>{item.name}</h3>
                <p>
                  {
                    item.genres.length > 0 ?
                    item.genres.map(genre => (
                      <span key={genre}>{genre}, </span>
                    )) : 'Sem classificação'
                  }
                </p>
              </div>
              {
                this.artistPopularity(item.popularity)
              }

            </li>
            </Link>
            ))
        }

      </ul>
    );
  }
}