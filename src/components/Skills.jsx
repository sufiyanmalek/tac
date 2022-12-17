import React, { useState } from 'react';
import "./Skills.css"

const Skills = () => {
  const [skill, setSkill] = useState("")
  const [skillArray,setSkillArray] = useState([])
  const handelChange = (e) => {
    setSkill(e.target.value)
  }
  const handleClick = () =>{
    setSkillArray((prevValue)=>{
      return [...prevValue,skill]
    })
    setSkill("")
  }
  return (
    <div className='Skills'>
      <div className='skills-input-section'>
        <label for="skills">Skills:
          <input type={'text'} onChange={handelChange} value={skill}  name="skills" id='skills' placeholder='Enter your Skills'></input><button onClick={handleClick}>Add</button>
        </label>
      </div>
      <div className='skills-tabs-section'>
        {skillArray.map((item,index)=>{
          return (
            <div className='skillTab' onClick={()=>{
              skillArray.splice(index,1)
              setSkillArray((prevValue)=>{
                return [...prevValue]
              })
            }} key={index} index={index}>{item}</div>
          )
        })}
      </div>
    </div>
  )
}

export default Skills