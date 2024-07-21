import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Filter = () => {
  const[searchparams,setsearchparams]=useSearchParams();
  // console.log(searchparams.get('age'))
  // console.log(searchparams.get('city'))
  const age=searchparams.get('age')
  const city=searchparams.get('city')
  return (
    <div>
      <h1>Filter</h1>
      <h1>{age}</h1>      
      <h1>{city}</h1>    
      <input type="text" onChange={(e)=>setsearchparams({text:e.target.value,age:10})} />
      <button onClick={()=>setsearchparams({age:40})}>click me</button>  
    </div>
  )
}

export default Filter
