import React from 'react';

const Button = ({ children, onClick }) => (
  <button className="primary-btn" onClick={onClick}>{children}</button>
);

export default Button;
