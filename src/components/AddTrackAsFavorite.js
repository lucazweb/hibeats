import React, { Component, Fragment } from 'react';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faStar from '@fortawesome/fontawesome-free-solid/faStar';
import faHeart from '@fortawesome/fontawesome-free-solid/faHeart';

export default class AddTrackAsFavorite extends Component {
  constructor() {
    super();
    this.state = { doneStyle: {} };
  }

  toggleButtonState = () => {
    this.setState({
      doneStyle: { color: '#eadb24'},
    });
  }

  addAsFavorite = () => {
    this.toggleButtonState();
    const cat = this.props.category;
    const obj = {
      id: this.props.favorite.id,
      name: this.props.favorite.name,
    };

    if (cat === 'tracks') {
      obj.artist = this.props.favorite.artists;
      obj.image = this.props.favorite.album.images[0].url;
    }

    if (localStorage.getItem('hibeats-favorites') !== null) {
      console.log('Favoritos existe');
      const favorites = JSON.parse(localStorage.getItem('hibeats-favorites'));

      let count = 0;
      favorites[`${cat}`].forEach((fav) => {
        if (fav.id === obj.id) {
          count += count + 1;
        }
      });

      if (count !== 0) {
        console.log('Album já favoritado.');
      } else {
        favorites[`${cat}`].push(obj);
        localStorage.setItem('hibeats-favorites', JSON.stringify(favorites));
      }
    } else {
      const model = { artists: [], albuns: [], tracks: [] };
      console.log(cat);
      model[`${this.props.category}`].push(obj);
      localStorage.setItem('hibeats-favorites', JSON.stringify(model));
    }
  }

  render() {
    return (
      <div className="track-list-favorite">
        <FontAwesomeIcon onClick={this.addAsFavorite} style={this.state.doneStyle} icon={faStar} />
      </div>
    );
  }
}
