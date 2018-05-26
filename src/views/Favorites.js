import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faStar from '@fortawesome/fontawesome-free-solid/faStar';

export default class Favorites extends Component{
    constructor(){
        super();
        this.state = {
            artists: [],
            albuns: [],
            tracks: [],
        }
        this.favStyle = { color: '#eadb24'};
    }

    componentDidMount(){
        const artists = [];
        const albuns = [];
        const tracks = [];

        if(localStorage.getItem('hibeats-favorites') !== null){

            
            const favorites = JSON.parse(localStorage.getItem('hibeats-favorites'));
            
            if(favorites.artists.length > 0){ 
                favorites.artists.forEach(artist => {
                    artists.push(artist);
                })
                console.log(artists);
                this.setState({ artists: artists })
            }

            if(favorites.albuns.length > 0){
                favorites.albuns.forEach(album => {
                    albuns.push(album);
                })
                console.log(albuns);
                this.setState({ albuns: albuns })
            }

            if(favorites.tracks.length > 0){
                favorites.tracks.forEach(track => {
                    tracks.push(track);
                })
                console.log(tracks);
                this.setState({ tracks: tracks })
            }

           
            console.log(albuns, this.state.albuns)
        }
    }

 render(){
     return (
         <div className="container-fluid"> 
         <div className="row"> 
         <Sidebar />
         <div className="favorites-view col-md-10"> 
            <h2>Favorites </h2>
            <div className="favorite-btns"> 

            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-secondary">Artists</button>
                <button type="button" className="btn btn-secondary">Albuns</button>
                <button type="button" className="btn btn-secondary">Tracks</button>
            </div>

            </div>
                <ul className="result-list result-list--favorites-album">
                    <h3> <FontAwesomeIcon style={this.favStyle} icon={faStar} /> Favorites Albuns</h3>
                  {
                  this.state.albuns.map(album => (
                    <Link key={album.id} to={`/album/${album.id}`}>
                    <li>
                      {
                        album.image && <img className="img-circle" src={album.image} alt="" />
                      }
                      <div className="item-info">
                        <h3>{album.name}</h3>
                      </div>
                    </li>
                    </Link>
                  ))
                }
                </ul>

         </div>
         </div>
            

         </div>
     )
 }

    
}