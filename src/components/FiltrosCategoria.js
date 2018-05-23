import React, { Fragment } from 'react';

import $ from 'jquery';

const FiltrosCategoria = ({ toggleActive }) => (
  <Fragment>
    <button onClick={this.props.toggleActive} className="btn btn-filtro btn-hibeats active"> Artistas </button>
    <button className="btn btn-filtro btn-hibeats"> Albuns </button>
    <button className="btn btn-filtro btn-hibeats"> Tracks </button>
  </Fragment>
);



export default FiltrosCategoria;
