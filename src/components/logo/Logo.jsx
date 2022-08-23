import React from 'react';
import './Logo.css';

const Logo = ({ title }) => {
  return (
    <h1 className='logo'>{ title }</h1>
  )
}

export default Logo;