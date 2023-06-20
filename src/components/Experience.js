import React from 'react'
import SectionHeader from './SectionHeader'
import ExperienceItem from './ExperienceItem'
import {motion} from 'framer-motion'
import {slide_up_options} from '../assets/constants/animation/slide_up'

function Experience({id, experiences}) {
  return (
    <section id={id} className='overflow-hidden'>
    <motion.div className='portfolio-section experience d-flex flex-column justify-content-between' 
      initial={slide_up_options.initial} 
      whileInView={slide_up_options.whileInView} 
      transition={slide_up_options.transition}
    >
      <SectionHeader id={id} headline="Experience" iconClass={"fa fa-briefcase"}></SectionHeader>
      <h5 className='display-5'>Education & <span className='display-5 highlighted-text'>Experience</span></h5>
      <div>
        {experiences.map((experience, index) => {
          return <ExperienceItem data={experience} key={index}></ExperienceItem>
        })}
      </div>
    </motion.div>
    </section>
  )
}

export default Experience