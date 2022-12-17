import React, { useState } from 'react'
import "./Categories.css"

const Categories = () => {
  const [category, setCategory] = useState("")
  const [categoryArray,setCategoryArray] = useState([])
  const handleChange = (e) => {
    setCategory(e.target.value)
  }
  const handleClick = () => {
    setCategoryArray((prevValue)=>{
      return [...prevValue,category]
    })
    setCategory("")
  }
  return (
    <div className='Categories'>
      <div className='categories-input-section'>
        <label for="categoriesAndOthers">Categories:
          <input type={'text'} name="categoriesAndOthers" value={category} onChange={handleChange} id='categoriesAndOthers' placeholder='Audience categories'></input><button onClick={handleClick}>Add</button>
        </label>
      </div>
      <div className='categories-tabs-section'>
        {categoryArray.map((item,index)=>{
          return (
            <div className='categoryTab' onClick={()=>{
              categoryArray.splice(index,1)
              setCategoryArray((prevValue)=>{
                return [...prevValue]
              })
            }} key={index} index={index}>{item}</div>
          )
        })}
      </div>
    </div>
  )
}

export default Categories