import React from 'react';
import PropTypes from 'prop-types';

const AlbumList = ({ lista }) => (
  <ul className="result-list result-list--album">
    {
       lista.map(item => (
        <li key={item.id}>
          {
            item.images.length > 0 && <img className="img-circle" src={item.images[0].url} alt="" />
          }

          <div className="item-info">
            <h3>{item.name}</h3>
            <p>Red Hot Chili Peppers</p>
          </div>
        </li>
      ))
    }

  </ul>
);

AlbumList.PropTypes = {
  lista: PropTypes.array,
};

export default AlbumList;
