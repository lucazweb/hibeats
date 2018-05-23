import React, { Component } from 'react';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import faFire from '@fortawesome/fontawesome-free-solid/faFire';
import faThumbsUp from '@fortawesome/fontawesome-free-solid/faThumbsUp';
import faHearth from '@fortawesome/fontawesome-free-solid/faHeart';
import faMeh from '@fortawesome/fontawesome-free-solid/faMeh';


export default class ResultList extends Component {
  constructor() {
    super();
    this.state = { lista: [] };
  }

  componentDidMount() {
    console.log('componente lista', this.props.lista);
  }

  artistPopularity(num) {
    if(num < 30){
      console.log(num, 'Underground');
    }
  }

  render() {
    return (

      <ul className="result-list">
        {
          this.props.lista.map(item => (
            <li key={item.id}>
              {
               item.images.length > 0 && <img className="img-circle" src={item.images[0].url} alt="" />
              }
              <div className="item-info">
                <h3>{item.name}</h3>
                <p>
                  {
                    item.genres.map(genre => (
                      <span key={genre}>{genre}</span>
                    ))
                  }
                </p>
              </div>
              <div className="popularity hot">
                <FontAwesomeIcon icon={faFire} /> Hot
              </div>
            </li>
            ))
        }

      </ul>
    );
  }
}
