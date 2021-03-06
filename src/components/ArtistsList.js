import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ArtistPopularity from './ArtistPopularity';

export default class ArtistsList extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (

      this.props.lista.length !== 0 ?

        (<ul className="result-list">
          {

          this.props.lista.map(item => (
            <Link key={item.id} to={`/artist/${item.id}`}>
              <li>
                {
               item.images.length > 0 && <div className="img" style={{ backgroundImage: `url(${item.images[0].url})` }} alt="" />
              }
                <div className="item-info">
                  <h3>{item.name}</h3>
                  <p>
                    {
                    item.genres.length > 0 ?
                    item.genres.map(genre => (
                      <span key={genre}>{genre}, </span>
                    )) : <span>Sem classificação</span>
                  }
                  </p>
                </div>

                <ArtistPopularity popularity={item.popularity} />
              </li>
            </Link>
            ))
        }
        </ul>) : <h2 className="search-feedback"> Try search your favorite Artist.. </h2>

    );
  }
}
