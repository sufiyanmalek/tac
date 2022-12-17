import React, { useState } from 'react'
import './Languages.css'

const Languages = () => {
    const [langArr,setLangArr]=useState([])
    const [lang, setLang] = useState("")
    const handleChange = (e)=>{
        setLang(e.target.value)
    }

    const handleClick = ()=>{
        setLangArr((preValue)=>{
            return [...preValue,lang]
        })
        setLang(""); 
    }
   
    
  return (
    <div>
        <div className='lang-input-section'>
            <label for="lang">Languages:</label>
            <input type={'text'} name="languages" id='lang' placeholder='Enter languages you know' onChange={handleChange} value={lang}></input><button  onClick={handleClick}>Add</button>
        </div>
        <div className='lang-tabs-section'>
            {langArr.map((item,index)=>{
                return <div className='langTab' onClick={()=>{
                    
                    langArr.splice(index,1)
                     setLangArr((preValue)=>{
                        return [...preValue]
                    })
                }} index={index} key={index}>{item}</div>
            })}
        </div>
    </div>
  )
}

export default Languages