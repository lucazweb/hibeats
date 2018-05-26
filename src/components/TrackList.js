import React from 'react';
import PropTypes from 'prop-types';
import AddTrackAsFavorite from '../components/AddTrackAsFavorite';

const TrackList = ({ lista }) => (
  lista.length !== 0 ?
  (<ul className="result-list result-list--track">
    {
    lista.map(item => (
      <li key={item.id}>
        {
          item.album.images.length > 0 && <div className="img img-track" style={{ backgroundImage: 'url(' + item.album.images[0].url  + ')' }} alt="" />
        }

        <div className="item-info">
          <h3>{item.name} -  {item.album.name}</h3>
          <p> <span>{item.artists[0].name} - 2:30 </span></p>
          <AddTrackAsFavorite favorite={item} category="tracks" />
        </div>
      </li>
    ))
  }

  </ul>) : <h2 className="search-feedback"> Try search your favorite Track.. </h2>
);

TrackList.PropTypes = {
  lista: PropTypes.array,
};

export default TrackList;
