import React from 'react'
import './AccountSecurity.css'

const AccountSecurity = () => {
  return (
    <div className='accountSecurity'>
    <h2>Account Security:</h2>
      <label for='mobileNumber'>
        <input type={'tel'} name='mobileNumber' id='mobileNumber' placeholder='Your mobile number'></input><button>verify</button>
      </label>
      <label for='email'>
        <input type={'email'} name='email' id='email' placeholder='Your email'></input><button>verify</button>
      </label>
    </div>
  )
}

export default AccountSecurity