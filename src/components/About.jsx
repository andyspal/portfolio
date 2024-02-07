import React from 'react'
import '../styles/About.scss'
import SkillList from './SkillList'
const About = () => {
  return (
    <div id='About'>
      <h2 className='title bold'>About me</h2>
      <div className='text-container'>
        <p className='bio'>
          Hi everyone, my name is Andy Spalla, I am a full stack web developer from Argentina. 
        </p>
        <p className='career'> I started this journey watching HTML, CSS and JS tutorials and I got hooked up. Now I'm studying Software Engineering at  <a className="underline" href='https://21.edu.ar/' target='blank'>Universidad Siglo 21</a> and currently in my second year.</p>
        <SkillList/>
      </div>
    </div>
  )
}

export default About
