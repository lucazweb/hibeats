import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AlbumList = ({ lista }) => (
  <ul className="result-list result-list--album">
    {
       lista.map(item => (
         <Link to={`/album/${item.id}`}>
        <li key={item.id}>
          {
            item.images.length > 0 && <img className="img-circle" src={item.images[0].url} alt="" />
          }

          <div className="item-info">
            <h3>{item.name}</h3>
            <p>Red Hot Chili Peppers</p>
          </div>
        </li>
        </Link>
      ))
    }

  </ul>
);

AlbumList.PropTypes = {
  lista: PropTypes.array,
};

export default AlbumList;
