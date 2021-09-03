import React from 'react'
import './Loader.css';
import loaderIcon from './loader.jpg'

const Loader = ({ item }) => {
  return (
    <div className='loader-container'>
      <h2 className='loader-heading'>Hang tight!</h2>
      <p>The {item} loading.</p>
      <img
        alt='Loading icon'
        className='loader-icon'
        src={loaderIcon}
      ></img>   
    </div>
  )
}

export default Loader;