import React from 'react'
import SectionHeader from './SectionHeader'
import {motion} from 'framer-motion'
import {slide_up_options} from '../assets/constants/animation/slide_up'
import coding_image from '../assets/images/coding.gif'
import useScrollSpy from '../hooks/useScrollSpy'

function Introduction({id, author, tagline}) {
  const ref = useScrollSpy(id);
  return (
    <section ref={ref} id={id} className='overflow-hidden'>
      <motion.div  className='portfolio-section introduction d-flex flex-column justify-content-between' 
        initial={slide_up_options.initial} 
        whileInView={slide_up_options.whileInView} 
        transition={slide_up_options.transition}
        >
        <SectionHeader id={id} headline="Introduce" iconClass={"fa fa-home"}></SectionHeader>
        <h2 className='display-2'>Welcome to <span className='highlighted-text display-2'>{author}</span>'s portfolio showcase, where creativity takes center stage!</h2>
        <p className='body-text'>{tagline}</p>
        <img src={coding_image} alt='coding-gif' height={"200px"} width={"200px"} style={{float:"right", margin:"auto"}}></img>
      </motion.div>
    </section>
  )
}

export default Introduction