import React, { useState } from 'react'
import "./Education.css"

const Education = () => {
  const [education,setEducation] = useState({})
  const [educationArray,setEducationArray] = useState([])
  const handleChange = (e) =>{
    setEducation({
      ...education,
      [e.target.name]:e.target.value,
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setEducationArray((prevValue)=>{
      return (
        [...prevValue,education]
      )
    })
    
    setEducation({
      college:"",
      country:"",
      degree:"",
      startYear:"",
      endYear:'',
    })
  }
  return (
    <div className='Education'>Education: 
      <div className='education-input-section'>
        <label for='college'>
          <input type={'text'} value={education.college} onChange={handleChange} name='college' id='college' placeholder='College name'></input>
        </label>
        <label for='country'>
          <input type={'text'} value={education.country} onChange={handleChange}  name='country' id='country' placeholder='country'></input>
        </label>
        <label for='degree'>
          <input type={'text'} value={education.degree} onChange={handleChange}  name='degree' id='degree' placeholder='degree for eg: B.tech '></input>
        </label>
        <div className='years-section'>
          <label for='startYear'>Start Year:
            <input type="number"  value={education.startYear} onChange={handleChange}  name='startYear' id='startYear'></input>
          </label>
          <label for='endYear'>End Year:
            <input type="number"   value={education.endYear} onChange={handleChange}  name='endYear' id='endYear'></input>
          </label>
        </div>
        <button onClick={handleSubmit} >Submit</button>
      </div>
      <div className='education-tabs-section'>
        {educationArray.map((item,index)=>{
          return (
            <div onClick={()=>{
              educationArray.splice(index,1);
              setEducationArray((prevValue)=>{
                return [...prevValue]
              })
              
            }} className='educationTab' key={index} index={index}>
              <h4>{item.college}</h4>
              <span>{item.country}</span><span>{item.degree}</span><br></br>
              <span>{item.startYear} to {item.endYear}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Education