import React, { Component } from 'react';
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
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch() {
    console.log(this.keyword.value);
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <div className="col-md-10">

            <div className="form-group">
              <input onChange={this.handleSearch} ref={(input) => this.keyword = input} className="form-control form-control--hibeats" placeholder="Search.." />
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

