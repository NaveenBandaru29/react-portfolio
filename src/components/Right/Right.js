import React from 'react'
import About from './About'
import Skills from './Skills'
import Education from './Education'
import Projects from './Projects'
import Contact from './Contact'
const Right = () => {
  return (
    <div className='right'>
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
    </div>
  )
}

export default Right