import React from 'react'
import gif from '../assets/images/loading_page2.gif' 

function PreLoader() {
  return (
    <div className='d-flex align-items-center justify-content-center' style={{width:"100%", height:"100vh"}}>
        <img src={gif} alt='pre-loading-gif' style={{width:"25%", height:"25vh"}}></img>
    </div>
  )
}

export default PreLoader