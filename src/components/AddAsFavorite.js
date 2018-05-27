import React, { Component, Fragment } from 'react';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faStar from '@fortawesome/fontawesome-free-solid/faStar';

export default class AddAsFavorite extends Component {
  constructor() {
    super();
    this.state = { buttonText: 'Add to favorites', doneStyle: {} };
  }

  toggleButtonState = () => {
    this.setState({
      doneStyle: { backgroundColor: '#669966'},
      buttonText: 'Added to favorites',
    });
  }

  addAsFavorite = () => {
    this.toggleButtonState();
    const cat = this.props.category;
    const obj = {
      id: this.props.favorite.id,
      name: this.props.favorite.name,
    };

    if (cat === 'albuns') {
      obj.artist = this.props.favorite.artists;
      obj.image = this.props.favorite.images[0].url;
    } else if (cat === 'artists') {
      obj.image = this.props.favorite.images[0].url;
    }

    if (localStorage.getItem('hibeats-favorites') !== null) {
      const favorites = JSON.parse(localStorage.getItem('hibeats-favorites'));
      let count = 0;
      favorites[`${cat}`].forEach((fav) => {
        if (fav.id === obj.id) {
          count += count + 1;
        }
      });

      if (count !== 0) {
        //console.log('Album já favoritado.');
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
      <Fragment>
        <button style={this.state.doneStyle} onClick={this.addAsFavorite} className="btn btn-block btn-favorite"> <FontAwesomeIcon icon={faStar} /> {this.state.buttonText}</button>
      </Fragment>
    );
  }
}
