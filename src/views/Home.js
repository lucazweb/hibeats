import React, { Component } from 'react';
import $ from 'jquery';
import Sidebar from '../components/Sidebar';
import AlbumList from '../components/AlbumList';
import ArtistsList from '../components/ArtistsList';
import TrackList from '../components/TrackList';

export default class Login extends Component {
  constructor() {
    super();
    this.token = sessionStorage.getItem('x-access-token');
    this.filtro = 'artist';
    this.state = { lista: [], filtro: 'artist'};
    this.handleSearch = this.handleSearch.bind(this);
    this.toggleFilters = this.toggleFilters.bind(this);
  }

  toggleFilters(evt) {
    this.setState({ filtro: evt.target.name });
    this.filtro = evt.target.name;
    this.setState({ lista: [] });
    $('.btn-filtro').removeClass('active');
    $(evt.target).addClass('active');
    this.handleSearch();
  }

  handleSearch() {
    console.log(this.token);
    console.log(this.keyword.value);
    console.log(this.state.filtro);
    console.log(this.filtro);

    const request = new Request(`https://api.spotify.com/v1/search?q=${this.keyword.value}&type=${this.filtro}`, {
      headers: new Headers({
        Authorization: `Bearer ${this.token}`
      }),
    });

    fetch(request)
      .then(response => response.json())
      .then((data) => {
        console.log(data[`${this.filtro}s`].items);
        this.setState({ lista: data[`${this.filtro}s`].items });
      });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <div className="col-md-10">
            <div className="form-group">
              <input onChange={this.handleSearch} ref={input => this.keyword = input} className="form-control form-control--hibeats" placeholder="Search.." />
            </div>

            <button name="artist" onClick={this.toggleFilters} className="btn btn-filtro btn-hibeats active"> Artistas </button>
            <button name="album" onClick={this.toggleFilters} className="btn btn-filtro btn-hibeats"> Albuns </button>
            <button name="track" onClick={this.toggleFilters} className="btn btn-filtro btn-hibeats"> Tracks </button>
            <div className="row">
              <div className="col-md-12">

                {
                  this.filtro === 'artist' && <ArtistsList lista={this.state.lista} />
                }

                {
                  this.filtro === 'album' && <AlbumList lista={this.state.lista} />
                }

                {
                  this.filtro === 'track' && <TrackList lista={this.state.lista} />
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

