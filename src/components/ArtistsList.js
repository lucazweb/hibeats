import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ArtistPopularity from './ArtistPopularity';


export default class ArtistsList extends Component {
  constructor() {
    super();
    this.state = { lista: [], in: false };
  }

  render() {
    return (
      <ul className="result-list">
        {
          this.props.lista.map(item => (

            <Link key={item.id} to={`/artist/${item.id}`}>
            <li>
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

              <ArtistPopularity popularity={item.popularity} />
            </li>
            </Link>
            ))
        }

      </ul>
    );
  }
}
