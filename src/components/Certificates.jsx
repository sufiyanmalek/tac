import React, { useState } from 'react'
import "./Certificates.css"

const Certificates = () => {
    const [certificate,setCertificate] = useState({})
    const [certificateArray,setCertificateArray] = useState([])
    const handleChange = (e) => {
        setCertificate({
            ...certificate,
            [e.target.name] : e.target.value,
        })
    }
    const handleClick = () =>{
        setCertificateArray((prevValue)=>{
            return [...prevValue,certificate]
        })
        setCertificate({
            certificateName:"",
            certificateLink:""
        })
        
       
    }
  return (
    <div className='Certificates'>Certificates:
        <div className='certificates-input-section'>
            <div className='inputs'>
                <label for="certificateName">
                    <input type={'text'} value={certificate.certificateName} onChange={handleChange} name='certificateName' id='certificateName' placeholder='certificate name'></input>
                </label>
                <label for="certificateLink">
                    <input type={'text'} value={certificate.certificateLink}  onChange={handleChange} name='certificateLink' id='certificateLink' placeholder='certificate link'></input>
                </label>
            </div>
            <div className='buttons'>
                <button onClick={handleClick}>Add</button>
            </div>
        </div>
        <div className='certificates-tabs-section'>
            {certificateArray.map((item,index)=>{
                return (
                    <div key={index} onClick={()=>{
                        certificateArray.splice(index,1)
                        setCertificateArray((prevValue)=>{
                            return [...prevValue]
                        })
                    }} className='certificateTab'>
                        <h4>{item.certificateName}</h4>
                        <a href={item.certificateLink}>{item.certificateLink}</a>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Certificates