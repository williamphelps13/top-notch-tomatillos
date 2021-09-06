import React from 'react'
import './Error.css';
import errorIcon from './error.png'

const Error = ({ message, page }) => {
  return (
    <div className='error-container'>
      <h2 className='loader-heading'>We've encountered an error in retrieving the {page}.</h2>
      <p>{message}</p>
      <img
        alt='Error icon'
        className='error-icon'
        src={errorIcon}
      ></img>   
    </div>
  )
}

export default Error;