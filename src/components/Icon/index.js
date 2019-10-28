import React from 'react';
import Images from '../../assets/images';

const Icon = ({ name, onClick }) => (
  <img
    className="icon clickable"
    src={Images[`icon-${name}`]}
    alt={name}
    onClick={onClick}
  />
);

export default Icon;
