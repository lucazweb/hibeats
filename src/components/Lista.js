import React from 'react';
import PropTypes from 'prop-types';

const Lista = ({ lista }) => (
  lista.map(item => (
    <div key={item.id}>
      {
            item.images.length > 0 &&
            <img alt="" src={item.images[0].url} className="result-list-img" />
        }
      <p> {item.name} </p>
    </div>
  ))
);

Lista.PropTypes = {
  lista: PropTypes.array,
};

export default Lista;
