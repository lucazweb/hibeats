import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import AlbumList from '../components/AlbumList';
import ArtistsList from '../components/ArtistsList';
import TrackList from '../components/TrackList';

export default class Login extends Component {
  constructor() {
    super();
    this.token = sessionStorage.getItem('x-access-token');
    this.filter = 'artist';
    this.activeStyle = {
      color: '#fff',
      backgroundColor: '#545b62',
      borderColor: '#4e555b'        
    };    
    this.state = { 
      isFavoriteSquareEnabled: true,
      lista: [], 
      filter: 'artist',
      btnStyle: {
        artists: this.activeStyle,
        albuns: {},
        tracks: {},
      },      
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.toggleFilters = this.toggleFilters.bind(this);
  }

  componentDidMount() {
    if(!sessionStorage.getItem('x-access-token')) {
      history.push('/');
    }

    if (localStorage.getItem('hibeats-urs')) {
      const user = JSON.parse(localStorage.getItem('hibeats-urs'));
      this.userImg = user.images[0].url;
    }
  }

  toggleFilters = (evt) => {   
    this.setState({  filter: evt.target.name, isFavoriteSquareEnabled: false });
    this.filter = evt.target.name;
    this.setState({ lista: [] });
    this.handleSearch();

    switch (evt.target.name) {
      case 'artist':
        this.setState({
          btnStyle: {
            artists: this.activeStyle,
            albuns: {},
            tracks: {},
          },
          filter: evt.target.name,
        });
        break;

      case 'album':
        this.setState({
          btnStyle: {
            artists: {},
            albuns: this.activeStyle,
            tracks: {},
          },
          filter: evt.target.name,
        });
        break;

      case 'track':
        this.setState({
          btnStyle: {
            artists: {},
            albuns: {},
            tracks: this.activeStyle,
          },                    
          filter: evt.target.name,
        });
        break;

      default:
        break;
    }
  }

  handleSearch() {
    const request = new Request(`https://api.spotify.com/v1/search?q=${this.keyword.value}&type=${this.filter}`, {
      headers: new Headers({
        Authorization: `Bearer ${this.token}`
      }),
    });

    fetch(request)
      .then(response => response.json())
      .then((data) => {
        this.setState({ lista: data[`${this.filter}s`].items });
      });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <div className="col-lg-10 col-sm-12 col-xs-12">
            <div className="form-group">
              <input onChange={this.handleSearch} ref={input => this.keyword = input} className="form-control form-control--search" placeholder="Search.." />
            </div>
            <div className="filter-btns"> 
              <div className="btn-group" role="group">
                <button style={this.state.btnStyle.artists} onClick={this.toggleFilters} name="artist"type="button"className="btn btn-filter btn-secondary">Artists</button>
                <button style={this.state.btnStyle.albuns} onClick={this.toggleFilters} name="album" type="button" className="btn btn-filter btn-secondary">Albuns</button>
                <button style={this.state.btnStyle.tracks} onClick={this.toggleFilters} name="track" type="button" className="btn btn-filter btn-secondary">Tracks</button>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">

                {
                  this.filter === 'artist' && <ArtistsList lista={this.state.lista} />
                }

                {
                  this.filter === 'album' && <AlbumList lista={this.state.lista} />
                }

                {
                  this.filter === 'track' && <TrackList lista={this.state.lista} />
                }
              </div>
            </div>
            {
             (localStorage.getItem('hibeats-urs') && this.state.isFavoriteSquareEnabled) &&
             (<Link to='/favorites'>
               <div className="user-profile-square">
                 <div className="square-title">Check all your favorites</div>
                 <div className="user-profile-bg" style={{backgroundImage: 'url(' + this.userImg + ')'}}></div>
               </div>
             </Link>)
           }
          </div>
        </div>
      </div>
    );
  }
}

