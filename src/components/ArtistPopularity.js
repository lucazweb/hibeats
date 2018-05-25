import React, { Component, Fragment } from 'react';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import faFire from '@fortawesome/fontawesome-free-solid/faFire';
import faThumbsUp from '@fortawesome/fontawesome-free-solid/faThumbsUp';
import faHearth from '@fortawesome/fontawesome-free-solid/faHeart';
import faMeh from '@fortawesome/fontawesome-free-solid/faMeh';

export default class ArtistPopularity extends Component {
  constructor() {
    super();
    this.state = {};
  }

  artistPopularity = (num) => {
    if (num < 30) {
      return (
        <div className="popularity underground">
          <FontAwesomeIcon icon={faMeh} /> Underground
        </div>
      );
    } else if ((num > 30 < 59) && (num < 60)) {
      return (
        <div className="popularity regular">
          <FontAwesomeIcon icon={faThumbsUp} /> Regular
        </div>
      );
    } else if ((num >= 60 <= 79) && (num < 80)) {
      return (
        <div className="popularity cool">
          <FontAwesomeIcon icon={faHearth} /> Cool
        </div>
      );
    }
    return (
      <div className="popularity hot">
        <FontAwesomeIcon icon={faFire} /> Hot
      </div>
    );
  }

  render() {
    return(
      <Fragment>
        {
          this.artistPopularity(this.props.popularity)
        }
     </Fragment>
    )
  }
}
