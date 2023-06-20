import React from 'react'
import TechStackItem from './TechStackItem'
import useLoadImage from '../hooks/useLoadImage'
import {motion} from 'framer-motion'
import {slide_left_options} from '../assets/constants/animation/slide_left'
import {slide_right_options} from '../assets/constants/animation/slide_right'

function ProjectItem({project}) {
    const imageSrc = useLoadImage(project.project_image);
  return (
    <div className='project-item d-flex flex-row row' onClick={()=>window.open(project.code_link, '_blank')}>
        <motion.div className='col-3'
            initial={slide_right_options.initial} 
            whileInView={slide_right_options.whileInView} 
            transition={slide_right_options.transition}
            >
            <img src={imageSrc} alt={project.title} className='project-image rounded'></img>
        </motion.div>
        <motion.div className='d-flex flex-column col-9'
            initial={slide_left_options.initial} 
            whileInView={slide_left_options.whileInView} 
            transition={slide_left_options.transition}
        >
            <h5 className='project-title'>{project.title} <span className="project-arrow">&#129125;</span></h5>
            <p className='body-text'>{project.description}</p>
            <div className='d-flex gap-2 flex-wrap'>
                {project.technologies_used.map((technology, index)=>{
                    return <TechStackItem key={index} skill={technology}></TechStackItem>
                })}
            </div>
        </motion.div>
    </div>
  )
}

export default ProjectItem