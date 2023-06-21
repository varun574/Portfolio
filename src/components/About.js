import React from 'react'
import SectionHeader from './SectionHeader'
import {motion} from 'framer-motion'
import {slide_up_options} from '../assets/constants/animation/slide_up'
import useScrollSpy from '../hooks/useScrollSpy';

function About({id, body}) {
  const ref = useScrollSpy(id);
  return (
    <section ref={ref} id={id} className='overflow-hidden'>
      <motion.div className='portfolio-section introduction d-flex flex-column justify-content-between'  
        initial={slide_up_options.initial} 
        whileInView={slide_up_options.whileInView} 
        transition={slide_up_options.transition}
        >
        <SectionHeader id={id} headline="About" iconClass={"fa fa-user"}></SectionHeader>
        <h5 className='display-5'>Transforming Ideas into Seamless <span className='highlighted-text display-5'>Web Experiences</span></h5>
        <p className='body-text'>{body}</p>
      </motion.div>
    </section>
  )
}

export default About