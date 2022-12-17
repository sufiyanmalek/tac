import React from 'react'
import ProfessionalInfo from './ProfessionalInfo'
import PersonalInfo from './PersonalInfo'
import LinkAccount from './LinkAccount'
import AccountSecurity from './AccountSecurity'
import './BecomeASeller.css'

const BecomeASeller = () => {
 
  return (
    <div className='becomeASeller'>BecomeASeller
      <PersonalInfo />
      <ProfessionalInfo />
      <LinkAccount />
      <AccountSecurity />
      <button className='save'>Save</button>
    </div>
  )
}

export default BecomeASeller