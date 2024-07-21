import React, { useState } from 'react'

const Logindatapostinapi = () => {
  function saveUser(){
    console.log({name,pass})
    let data={name,pass}
    fetch("http://localhost:3000/students",{
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
      
    }).then((result)=>{
      console.log('Result',result)
      result.json().then((resp)=>{
        console.log('Responce :',resp)

      })
    })
  }

  const [name,setname]=useState("");
  const [pass,setpass]=useState("");
  return (
    <div>
      <h1>Login Form</h1>
      <form action="">
        <input type="text" value={name} onChange={(e)=>{setname(e.target.value)}}/>
        <br /><br />
        <input type="password" value={pass} onChange={(e)=>{setpass(e.target.value)}}/>
        <br /><br />
        <button type='button' onClick={saveUser}>Submit</button>
      </form>
    </div>
  )
}

export default Logindatapostinapi
