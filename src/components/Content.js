import React from 'react'
import Introduction from './Introduction'
import About from './About'
import Experience from './Experience'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import {intro_constants} from '../assets/constants/intro_constants'
import {about_constants} from '../assets/constants/about_constants'
import {experience_constants} from '../assets/constants/experience_constants'
import {project_constants} from '../assets/constants/project_constants'
import {skill_constants} from '../assets/constants/skill_constants'
import {profile_data} from '../assets/constants/profile_constants.js'

function Content() {
  return (
    <div className='content d-flex flex-column'>
      <Introduction id="introduction-section" author={intro_constants.author} tagline={intro_constants.tagline}></Introduction>
      <About id="about-section" body={about_constants.body}></About>
      <Experience id="experience-section" experiences={experience_constants}></Experience>
      <Skills id="skill-section" skills={skill_constants}></Skills>
      <Projects id="project-section" projects={project_constants}></Projects>
      <Contact id="contact-section" emailId={profile_data.email}></Contact>
    </div>
  )
}

export default Content