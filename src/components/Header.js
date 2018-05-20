import React from 'react';
import PropTypes from 'prop-types';

const Header = ({title}) => {
    return (
        <h1> {title} </h1>
    )
};

Header.PropTypes = {
    title: PropTypes.string
};

export default Header;