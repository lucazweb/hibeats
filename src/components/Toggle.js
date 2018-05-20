import React from 'react';
import PropTypes from 'prop-types';

const Toggle = ({option, toggleString}) => {
    return (
        <button name={option} onClick={toggleString}> {option} </button>
    )
}

Toggle.PropTypes = {
    option: PropTypes.string,
    toggleString: PropTypes.func
}

export default Toggle