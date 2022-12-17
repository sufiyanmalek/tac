import React from 'react'
import './LinkAccount.css'

import { SiFacebook, SiGoogle, SiInstagram, SiLinkedin, SiTwitter, SiYoutube } from "react-icons/si";

const linkAccount = () => {
  return (
    <div className='linkAccount'>
    <h2>Link Accounts:</h2>
    <div>
      <a href='/'><SiGoogle  size={30} /></a>
      <a href='/'><SiLinkedin size={30} /></a>
      <a href='/'><SiFacebook size={30} /></a>
      <a href='/'><SiTwitter size={30} /></a>
      <a href='/'><SiInstagram size={30} /></a>
      <a href='/'><SiYoutube size={30} /></a>
    </div>
    </div>
  )
}

export default linkAccount