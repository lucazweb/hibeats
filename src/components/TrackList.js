import React from 'react';
import PropTypes from 'prop-types';

const TrackList = ({ lista }) => (
  <ul className="result-list result-list--track">
    {
    lista.map(item => (
      <li>
        {
          item.album.images.length > 0 && <div className="img img-track" style={{ backgroundImage: 'url(' + item.album.images[0].url  + ')' }} alt="" />
        }

        <div className="item-info">
          <h3>{item.name} -  {item.album.name}</h3>
          <p> {item.artists[0].name} - 2:30</p>
        </div>
      </li>
    ))
  }

  </ul>
);

TrackList.PropTypes = {
  lista: PropTypes.array,
};

export default TrackList;
