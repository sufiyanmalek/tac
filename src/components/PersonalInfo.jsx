import React from 'react'
import Languages from './Languages'
import './PersonalInfo.css'

const PersonalInfo = () => {

  return (
    <div className='personalInfo'>
    <h2>Personal Information: </h2>
      <label for="fullName">Full Name
        <input type={'text'} name="fullName" id='fullName' placeholder='fullname'></input>
      </label>
      <label for="profilePic">Profile picture:
        <input type={'file'} name="profilePic" id='profilePic'></input>
      </label>
      <label for="desc">Description:<br />
        <textarea maxLength={150}  name="desc" id='desc' placeholder='Tell us more about yourself...'></textarea>
      </label>
      <Languages />
    </div>
  )
}

export default PersonalInfo