import React, { Component } from 'react';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import faStar from '@fortawesome/fontawesome-free-solid/faStar';
import faFire from '@fortawesome/fontawesome-free-solid/faFire';
import faThumbsUp from '@fortawesome/fontawesome-free-solid/faThumbsUp';
import faHearth from '@fortawesome/fontawesome-free-solid/faHeart';
import faMeh from '@fortawesome/fontawesome-free-solid/faMeh';

import Sidebar from '../components/Sidebar';
import AlbumDetail from '../components/AlbumDetail';
import ArtistDetail from '../components/ArtistDetail';
import ResultList from '../components/ResultList';
import TrackList from '../components/TrackList';
import FiltrosCategoria from '../components/FiltrosCategoria';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <div className="col-md-10">
            <div className="form-group">
              <input className="form-control form-control--hibeats" placeholder="Search.." />
            </div>

            <FiltrosCategoria />
            <div className="row">
              <div className="col-md-12">
                <ResultList />
                <TrackList />
              </div>
              <AlbumDetail />
            </div>
            <ArtistDetail />
          </div>
        </div>

      </div>
    );
  }
}

