import React from 'react'
import SectionHeader from './SectionHeader'
import ContactForm from './ContactForm'
import {motion} from 'framer-motion'
import {slide_up_options} from '../assets/constants/animation/slide_up'

function Contact({id, emailId}) {
  return (
    <section id={id} className='overflow-hidden'>
      <motion.div className='portfolio-section contact d-flex flex-column justify-content-between' 
        initial={slide_up_options.initial} 
        whileInView={slide_up_options.whileInView} 
        transition={slide_up_options.transition}
      >
        <SectionHeader id={id} headline="Contact" iconClass={"fa fa-envelope"}></SectionHeader>
        <h5 className='display-5'>Feel free to <span className='display-5 highlighted-text'>contact!</span></h5>
        <p className='body-text'>Need to get in contact or just want to send a message my way? Use this form:</p>
        <p className='profile-body'>{emailId}</p>
        <ContactForm></ContactForm>
      </motion.div>
    </section>
  )
}

export default Contact