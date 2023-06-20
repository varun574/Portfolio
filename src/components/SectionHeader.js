import React from 'react'

function SectionHeader({id, headline, iconClass}) {
  return (
    <div className='section-header border border-secondary rounded-pill' onClick={()=>document.getElementById(id).scrollIntoView({behavior:"smooth"})}>
        <p><i className={iconClass}></i>{headline}</p>
    </div>
  )
}

export default SectionHeader