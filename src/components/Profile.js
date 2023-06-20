import React from 'react'
import {profile_data} from '../assets/constants/profile_constants.js'
import {media_sources} from '../assets/constants/media_constants.js'
import profile_icon from '../assets/images/me3.jpg'
import Icon from './icon.js'

function Profile() {
  
  return (
    <div className='profile d-flex flex-column align-items-center justify-content-around p-3'>
      <div className='profile-heading'>
        <h6 className='display-6'>{profile_data.author}</h6>
        <span style={{float:'right'}}>{profile_data.designation}</span>
      </div>
      <div className='profile-pic'>
      <img src={profile_icon} height={"200px"} width={"200px"} className='rounded' style={{objectFit:"cover", objectPosition:"50% 10%", filter:"grayscale(100%)"}} alt='profile'></img>
      </div>
      <div className='profile-body'>
        <h4 style={{textAlign:"center"}}>{profile_data.email}</h4>
        <h4 style={{textAlign:"center"}}>{profile_data.address}</h4>
      </div>
      <div className='profile-footer'>
        <p className="body-text" style={{wordWrap:"break-word", textAlign : "center"}}>I build accessible, inclusive products and digital experiences for the web.</p>
        <div className="d-flex flex-row justify-content-center">
          {media_sources.map((media, index)=>{
            return <div><Icon iconClass={media.iconClass} mediaSrc={media.src} key={index} ></Icon></div>
          })}
        </div>
        <div className="d-flex flex-row justify-content-around">
          <button className="contact-btn border-2 btn rounded-pill">Contact Me</button>
        </div>
      </div>
    </div>
  )
}

export default Profile