import React from 'react'
import useLoadImage from '../hooks/useLoadImage'
import {motion} from 'framer-motion'

function SkillItem({skill, animation_options}) {
    const iconSrc = useLoadImage(skill.icon)
  return (
    <motion.div className='skill-item'
      initial={animation_options.initial} 
      whileInView={animation_options.whileInView} 
      transition={animation_options.transition}
    >
        <div className='skill-icon-parent rounded-pill mb-3'>
            <img src={iconSrc} alt={skill.technology} className='skill-icon'></img>
        </div>
        <p style={{textAlign:"center"}}>{skill.technology}</p>
    </motion.div>
  )
}

export default SkillItem