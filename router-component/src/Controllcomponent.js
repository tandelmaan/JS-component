import React,{useState} from 'react'

const Controllcomponent = () => {
  const [val,setval]=useState("123")
  console.log(val)
  return (
    <div>
      <h1>Controll component with state</h1>
      <input type="text" value={val} onChange={(e)=>setval(e.target.value)}/>
      {/* <input type="text" defaultValue={123} onChange={(e)=>setval(e.target.value)}/> */}
      <h1>{val}</h1>
    </div>
  )
}

export default Controllcomponent
