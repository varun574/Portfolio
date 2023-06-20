import React from 'react'

function Icon({iconClass, mediaSrc}) {
  return (
    <i className={iconClass+" icon text-secondary border border-secondary border-2 rounded-circle"} onClick={()=>window.open(mediaSrc, '_blank')}></i>
  )
}

export default Icon