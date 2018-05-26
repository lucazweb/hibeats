import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import history from '../history';
import PropTypes from 'prop-types';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch';
import faStar from '@fortawesome/fontawesome-free-solid/faStar';
import faSignOutAlt from '@fortawesome/fontawesome-free-solid/faSignOutAlt';
import faHome from '@fortawesome/fontawesome-free-solid/faHome';
import logo from '../img/logo.png';

export default class Sidebar extends Component {
  constructor() {
    super();
    this.activeStyle = {
      backgroundColor: '#069',
    };
    this.state = {
      locationStyle: {
        search: {},
        favorites: {},
      }
    };
  }

  componentDidMount(){
    console.log(history.location.pathname);
    switch (history.location.pathname) {
      case '/favorites':
        this.setState({
          locationStyle: {
            search: {},
            favorites: this.activeStyle,
          }
        })
        break;

      case '/home':
        this.setState({
          locationStyle: {
            search: this.activeStyle,
            favorites: {},
          }
        })
        break;

    
      default:
        break;
    }
  }

  render(){
    return (
      <Fragment>
      <div className="col-md-2 dash-menu">
        <div style={{backgroundImage: 'url(' + logo + ')'}} className="logo" />
        <nav className="sidebar">
          <ul>
            <li style={this.state.locationStyle.search}> <Link to="/home"> <FontAwesomeIcon icon={faSearch} /> Search</Link></li> 
            <li style={this.state.locationStyle.favorites}> <Link to="/favorites"><FontAwesomeIcon icon={faStar} />  Favorites </Link></li>
            <li> <FontAwesomeIcon icon={faSignOutAlt} /> Sair</li>
          </ul>
        </nav>
    </div> 
    <div className="mobile-nav"> 
          <ul>
              <li style={this.state.locationStyle.search}><Link to="/home"><FontAwesomeIcon icon={faSearch} /> <span>Search</span></Link></li>
              <li style={this.state.locationStyle.favorites}><Link to="/favorites"><FontAwesomeIcon icon={faStar} /> <span>Favorites</span></Link></li>
              <li><FontAwesomeIcon icon={faSignOutAlt} /> <span>Sair</span></li>
          </ul>
      </div>    
    </Fragment>     
    )
  }
}
