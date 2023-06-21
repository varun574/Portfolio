import React from 'react'
import ProjectItem from './ProjectItem'
import SectionHeader from './SectionHeader'
import {motion} from 'framer-motion'
import {slide_up_options} from '../assets/constants/animation/slide_up'
import useScrollSpy from '../hooks/useScrollSpy'

function Projects({id, projects}) {
  const ref = useScrollSpy(id);
  return (
    <section ref={ref} id={id} className='overflow-hidden'> 
      <motion.div className='portfolio-section projects d-flex flex-column justify-content-between'
        initial={slide_up_options.initial} 
        whileInView={slide_up_options.whileInView} 
        transition={slide_up_options.transition}
      >
        <SectionHeader id={id} headline="Projects" iconClass={"fa fa-code"}></SectionHeader>
        <h5 className='display-5'>Featured <span className='display-5 highlighted-text'>Projects</span></h5>
        <div className='d-flex flex-column gap-5'>
        {projects.map((project, index) => {
          return <ProjectItem key={index} project={project}></ProjectItem>
        })}
        </div>
      </motion.div>
    </section>
  )
}

export default Projects