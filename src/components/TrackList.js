import React from 'react';
import PropTypes from 'prop-types';
import AddTrackAsFavorite from '../components/AddTrackAsFavorite';

const TrackList = ({ lista }) => (
  <ul className="result-list result-list--track">
    {
    lista.map(item => (
      <li key={item.id}>
        {
          item.album.images.length > 0 && <div className="img img-track" style={{ backgroundImage: 'url(' + item.album.images[0].url  + ')' }} alt="" />
        }

        <div className="item-info">
          <h3>{item.name} -  {item.album.name}</h3>
          <p> {item.artists[0].name} - 2:30</p>
          <AddTrackAsFavorite favorite={item} category="tracks" />
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
