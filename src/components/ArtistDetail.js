import React from 'react';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faStar from '@fortawesome/fontawesome-free-solid/faStar';

const ArtistDetail = () => (
  <div className="row">
    <div className="col-md-12">
      <div className="artist-detail">
        <h2>Naga Mahesh</h2>
        <div className="favorite-ctrl">
          <button className="btn btn-block btn-favorite"> <FontAwesomeIcon icon={faStar} /> Adicionar aos favoritos</button>
        </div>
        <ul className="result-list result-list--album">
          <li>
            <img className="img-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr6GqFzLgE4nI7HX5mclX1XDPxwZJgno1tDW0WCOm2QM6GKtE4" alt="" />
            <div className="item-info">
              <h3>Californication</h3>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default ArtistDetail;
