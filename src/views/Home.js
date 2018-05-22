import React, { Component } from 'react';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import faFire from '@fortawesome/fontawesome-free-solid/faFire';
import faThumbsUp from '@fortawesome/fontawesome-free-solid/faThumbsUp';
import faHearth from '@fortawesome/fontawesome-free-solid/faHeart';
import faMeh from '@fortawesome/fontawesome-free-solid/faMeh';

import Sidebar from '../components/Sidebar';

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
              <button className="btn btn-hibeats active"> Artistas </button>
              <button className="btn btn-hibeats"> Albuns </button>
              <button className="btn btn-hibeats"> Tracks </button>
              
              <div className="row">
                  <div className="col-md-12">
                      <ul className="result-list">
                          <li>
                              <img className="img-circle" src="https://upload.wikimedia.org/wikipedia/en/3/3e/Black_ice_red.jpg" alt="" />
                              <div className="item-info">
                                  <h3>Nome do Artista</h3>
                                  <p>Rock, Metal, Hardcore <label>Cool</label></p>
                              </div>
                              <div className="popularity hot"> <FontAwesomeIcon icon={faFire} /> Hot </div>
                          </li>
                 
                          <li>
                              <img className="img-circle" src="https://upload.wikimedia.org/wikipedia/en/3/3e/Black_ice_red.jpg" alt="" />
                              <div className="item-info">
                                  <h3>Nome do Artista</h3>
                                  <p>Rock, Metal, Hardcore <label >Cool</label></p>
                              </div>
                              <div className="popularity cool">  <FontAwesomeIcon icon={faHearth} />  Cool </div>
                          </li>
                    
                          <li>
                              <img className="img-circle" src="https://upload.wikimedia.org/wikipedia/en/3/3e/Black_ice_red.jpg" alt="" />
                              <div className="item-info">
                                  <h3>Nome do Artista</h3>
                                  <p>Rock, Metal, Hardcore <label >Cool</label></p>
                              </div>
                              <div className="popularity regular"> <FontAwesomeIcon icon={faThumbsUp} /> Regular </div>
                          </li>
             
                          <li>
                              <img className="img-circle" src="https://upload.wikimedia.org/wikipedia/en/3/3e/Black_ice_red.jpg" alt="" />
                              <div className="item-info">
                                  <h3>Nome do Artista</h3>
                                  <p>Rock, Metal, Hardcore <label >Cool</label></p>
                              </div>
                              <div className="popularity hot"> <FontAwesomeIcon icon={faMeh} /> Underground </div>
                          </li>
                     
                      </ul>

                      <ul className="result-list result-list--album">
                    
                          <li>
                              <img className="img-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr6GqFzLgE4nI7HX5mclX1XDPxwZJgno1tDW0WCOm2QM6GKtE4" alt="" />
                              <div className="item-info">
                                  <h3>Californication</h3>
                                  <p>Red Hot Chili Peppers</p>
                              </div>
                          </li>
                  
                      </ul>

                      <ul className="result-list result-list--track">
                    
                          <li>
                              <img className="img-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr6GqFzLgE4nI7HX5mclX1XDPxwZJgno1tDW0WCOm2QM6GKtE4" alt="" />
                              <div className="item-info">
                                  <h3>Scar Tissue</h3>
                                  <p>Red Hot Chili Peppers - Californication (2000) - 2:30</p>
                              </div>
                          </li>
                    
                      </ul>
                      
                      <div className="album-detail">
                          <h2>Album details</h2>
                          <div className="album-info">
                              <img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr6GqFzLgE4nI7HX5mclX1XDPxwZJgno1tDW0WCOm2QM6GKtE4" />
                              <h2>Californication</h2>
                              <p>Red Hot Chili Peppers</p>
                              <button className="btn btn-block btn-favorite"> <i className="fa fa-star" aria-hidden="true"></i> Adicionar aos favoritos</button>
                          </div>

                          <ul className="track-list">
                              <li><i className="fa fa-music" aria-hidden="true"></i> Around The World</li>
                              <li><i className="fa fa-music" aria-hidden="true"></i> Parallel Universe</li>
                              <li><i className="fa fa-music" aria-hidden="true"></i> Scar Tissue</li>
                              <li><i className="fa fa-music" aria-hidden="true"></i> Otherside</li>
                              <li><i className="fa fa-music" aria-hidden="true"></i> Get On Top</li>
                              <li><i className="fa fa-music" aria-hidden="true"></i> Californication</li>
                              <li><i className="fa fa-music" aria-hidden="true"></i> Easily</li>
                              <li><i className="fa fa-music" aria-hidden="true"></i> Porcelain</li>
                              <li><i className="fa fa-music" aria-hidden="true"></i> Emit Remmus</li>
                              <li><i className="fa fa-music" aria-hidden="true"></i> I Like Dirt</li>
                              <li><i className="fa fa-music" aria-hidden="true"></i> Thes Velvet Glove</li>
                              <li><i className="fa fa-music" aria-hidden="true"></i> Savior</li>
                              <li><i className="fa fa-music" aria-hidden="true"></i> Purple Stain</li>
                              <li><i className="fa fa-music" aria-hidden="true"></i> Right On Time</li>
                              <li><i className="fa fa-music" aria-hidden="true"></i> Road Trippin'</li>
                          </ul>
                      </div>

                  </div> 
              </div>  
              <div className="row">
                  <div className="col-md-12">
                   
                      <div className="artist-detail">
                              <h2>Naga Mahesh</h2>
                              <div className="favorite-ctrl">
                                      <button className="btn btn-block btn-favorite"> <i className="fa fa-star" aria-hidden="true"></i> Adicionar aos favoritos</button>
                              </div>
                              <ul className="result-list result-list--album">
                                
                                  <li>
                                      <img className="img-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr6GqFzLgE4nI7HX5mclX1XDPxwZJgno1tDW0WCOm2QM6GKtE4" alt="" />
                                      <div className="item-info">
                                          <h3>Californication</h3>
                                      </div>
                                  </li>
                               
                                  <li>
                                      <img className="img-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr6GqFzLgE4nI7HX5mclX1XDPxwZJgno1tDW0WCOm2QM6GKtE4" alt="" />
                                      <div className="item-info">
                                          <h3>Californication</h3>
                                      </div>
                                  </li>
                                
                                  <li>
                                      <img className="img-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr6GqFzLgE4nI7HX5mclX1XDPxwZJgno1tDW0WCOm2QM6GKtE4" alt="" />
                                      <div className="item-info">
                                          <h3>Californication</h3>
                                      </div>
                                  </li>
                           
                                  <li>
                                      <img className="img-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr6GqFzLgE4nI7HX5mclX1XDPxwZJgno1tDW0WCOm2QM6GKtE4" alt="" />
                                      <div className="item-info">
                                          <h3>Californication</h3>
                                      </div>
                                  </li>
                              
                                  <li>
                                      <img className="img-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr6GqFzLgE4nI7HX5mclX1XDPxwZJgno1tDW0WCOm2QM6GKtE4" alt="" />
                                      <div className="item-info">
                                          <h3>Californication</h3>
                                      </div>
                                  </li>
                              </ul>
                          </div>
                  </div>

              </div>
          

          </div>
      </div>

  </div>
    );
  }
}

