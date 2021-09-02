import React from 'react'
// import './Error.css';

const Error = () => {
  return (
    <div className='error-container'>
      <h2 className='loader-heading'>We've encountered an error!</h2>
      <p>The server doesn't seem to be responding right now.</p>
      <img
        alt='Error icon'
        className='error-icon'
        src='./error.jpg'
      ></img>   
    </div>
  )
}

export default Error;