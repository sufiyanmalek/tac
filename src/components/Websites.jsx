import React, { useState } from 'react'
import "./Websites.css"

const Websites = () => {
  const [websiteLink,setWebsiteLink] = useState("")
  const [websiteLinkArr,setWebsiteLinkArr] = useState([])
  const handleChange = (e) => {
    setWebsiteLink(e.target.value)
  }
  const handleSubmit = () => {
    setWebsiteLinkArr((prevValue)=>{
      return [...prevValue,websiteLink]
    })
    setWebsiteLink("")

  }
  return (
    <div className='Websites'> Websites:
        <div className='websites-input-section'>
            <label for='websiteLink'>
                <input type={'text'} onChange={handleChange} value={websiteLink} name='websiteLink' id='websiteLink' placeholder='portfolio or website link'></input>
            </label>
            <button onClick={handleSubmit}>Add</button>
        </div>
        <div className='websites-tabs-section'>
          {websiteLinkArr.map((item,index)=>{
            return (
              <div onClick={()=>{
                websiteLinkArr.splice(index,1)
                setWebsiteLinkArr((prevValue)=>{
                  return [...prevValue]
                })
              }}  className='websiteTab'>
                <a href={item}>{item}</a>
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default Websites