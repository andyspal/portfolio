import React from 'react';
import '../styles/SkillList.scss';
import { IoLogoReact } from "react-icons/io5";
import { IoLogoSass, IoLogoJavascript } from "react-icons/io";
import { LiaNode } from "react-icons/lia";
import { SiExpress, SiMongodb } from "react-icons/si";
const SkillList = () => {
  return (
    <div className='skills'>
      <IoLogoJavascript color='#F7DF1E'/>
      <LiaNode color='#8CC84B'/>
      <SiExpress color='#4FC08D'/>
      <IoLogoReact color='#61DAFB'/>
      <SiMongodb color='#4DB33D'/>
      <IoLogoSass color='#CC6699'/>
    </div>
  )
}

export default SkillList
