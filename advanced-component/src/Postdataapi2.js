import React, { useState } from 'react'

const Postdataapi2 = () => {
  const[name,setName]=useState("");
  const[pass,setPass]=useState("");
  const[mobile,setMobile]=useState("");
  const data={name,pass,mobile};

  function saveData(){
    console.log({name,pass,mobile});
    fetch('http://localhost:3000/students',{
      method:'POST',
      headers:{
        'accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
    }).then((result)=>{
      result.json().then((resp)=>{
        console.log('Responce',resp)
      })
    })
  }
  return (
    <div>
      <h1>Post the data in api </h1>
      <form action="">
        <input type="name" name='name' value={name} onChange={(e)=>{setName(e.target.value)}}/>
        <br /><br />
        <input type="password" name='pass' value={pass} onChange={(e)=>{setPass(e.target.value)}}/>
        <br /><br />
        <input type="mobile" name='mobile' value={mobile} onChange={(e)=>{setMobile(e.target.value)}}/>
        <br /><br />
        <button type='button' onClick={saveData}>click</button>
      </form>
    </div>
  )
}

export default Postdataapi2 
