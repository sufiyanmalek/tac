import React from 'react'
import Categories from './Categories'
import Certificates from './Certificates'
import Education from './Education'
import './ProfessionalInfo.css'
import Skills from './Skills'
import Websites from './Websites'

const ProfessionalInfo = () => {
  return (
    <div className='professionalInfo'>
    <h2>Professional Info:</h2>
    <Categories />
    <Skills />
    <Education />
    <Certificates />
    <Websites />
    </div>
  )
}

export default ProfessionalInfo