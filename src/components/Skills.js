import React from 'react'
import SectionHeader from './SectionHeader'
import SkillItem from './SkillItem'
import {motion} from 'framer-motion'
import {slide_up_options} from '../assets/constants/animation/slide_up'
import {slide_all_directions} from '../assets/constants/animation/slide_all_directions'

function Skills({id, skills}) {
  let available_animation_directions = slide_all_directions.length; 
  return (
    <section id={id} className='overflow-hidden'>
    <motion.div className='portfolio-section skills d-flex flex-column justify-content-between' 
      initial={slide_up_options.initial} 
      whileInView={slide_up_options.whileInView} 
      transition={slide_up_options.transition}
    >
      <SectionHeader id={id} headline="Skills" iconClass={"fa fa-cube"}></SectionHeader>
      <h5 className='display-5'>My <span className='display-5 highlighted-text'>Skill</span> Set</h5>
      <div className='d-flex flex-row gap-5 flex-wrap'>
        {skills.map((skill, index)=>{
          let animation_options = slide_all_directions[index%available_animation_directions];
          return <SkillItem key={index} skill={skill} animation_options={animation_options}></SkillItem>
        })}
      </div>
    </motion.div>
    </section>
  )
}

export default Skills