import React from 'react'
// import './Loader.css';
import App from './App'
import { Link } from 'react-router-dom';

const Loader = ({ item }) => {
  return (
    <div className='loader-container'>
      <h2 className='loader-msg'><p>Hang tight!</p><p>The {item} loading.</p></h2>    
    </div>
  )
}

export default Loader;