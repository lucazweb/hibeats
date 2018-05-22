import React from 'react';
import PropTypes from 'prop-types';

const SearchInput = ({ref}) => (
  <div className="form-group">
    <input ref={ref} className="form-control form-control--hibeats" placeholder="Search.." />
  </div>
);

SearchInput.PropTypes = {
  ref: PropTypes.func,
};

export default SearchInput;
