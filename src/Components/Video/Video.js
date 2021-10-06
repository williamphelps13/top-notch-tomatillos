import React from 'react'
import './Video.css'

const Video = ({ id, title }) => (
  <div className="video-container">
    <iframe 
      width='427' 
      height='240'
      src={`https://www.youtube.com/embed/${id}`} 
      title={`${title} Movie Trailer`}
      frameBorder='0'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen
    />
  </div>
)

export default Video;