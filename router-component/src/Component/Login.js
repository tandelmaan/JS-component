import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const login =()=>{
    localStorage.setItem('login',true)
  }
  const navigate=useNavigate();
  useEffect(()=>{
    let login =localStorage.getItem('login')
    if(login){
      navigate('/')
    }
  })
  return (
    <div>
      <form action="">
        <h1>Login Form</h1>
        <input type="text" />
        <br /><br />
        <input type="text" />
        <br /><br />
        <button onClick={login}>Submit</button>
      </form>
    </div>
  )
}

export default Login
