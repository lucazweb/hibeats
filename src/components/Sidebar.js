import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch';
import faStar from '@fortawesome/fontawesome-free-solid/faStar';
import faSignOutAlt from '@fortawesome/fontawesome-free-solid/faSignOutAlt';
import faHome from '@fortawesome/fontawesome-free-solid/faHome';
import logo from '../img/logo.png';

const Sidebar = () => (
  <div className="col-md-2 dash-menu">
    <div style={{backgroundImage: 'url(' + logo + ')'}} className="logo" />
    <nav>
      <ul>
        <li> <FontAwesomeIcon icon={faSearch} /> Search</li>
        <li> <FontAwesomeIcon icon={faHome} />  Home</li>
        <li> <Link to="/favoritos"><FontAwesomeIcon icon={faStar} />  Favoritos </Link></li>
        <li> <FontAwesomeIcon icon={faSignOutAlt} /> Sair</li>
      </ul>
    </nav>
  </div>
);

export default Sidebar;
