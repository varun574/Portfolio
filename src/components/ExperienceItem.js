import React from 'react'
import TechStackItem from './TechStackItem'
import {motion} from 'framer-motion'
import {slide_left_options} from '../assets/constants/animation/slide_left'

function ExperienceItem({data}) {
  return (
    <motion.div className='experience-item'
      initial={slide_left_options.initial} 
      whileInView={slide_left_options.whileInView} 
      transition={slide_left_options.transition}
    >
        <p className='body-text experience-timeline'>{data.timeline}</p>
        <h4 className='highest-designation'>{data.highest_designation} &middot; {data.company}</h4>
        {data.previous_designations.map((designation, index) => {
            return <p className='body-text' key={index}>{designation}</p>
        })}
        <p className='body-text'>{data.description}</p>
        <div className='d-flex flex-row gap-2 flex-wrap'>
            {data.skills.map((skill, index)=>{
                return <TechStackItem key={index} skill={skill}></TechStackItem>
            })}
        </div>
    </motion.div>
  )
}

export default ExperienceItem