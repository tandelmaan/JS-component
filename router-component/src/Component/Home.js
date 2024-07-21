import React from 'react'
import { Link , useNavigate } from 'react-router-dom'

const Home = () => {
  

  const navigate=useNavigate();
  function navTopage(url){
    // navigate('/about')
    navigate(url)

    // let x=false;
    // if(x){
    //   navigate('/about')
    // }else{
    //   navigate('/filter')
    // }
  }
  return (
    <div>
      <h1>Home</h1>
      <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nesciunt, veritatis dicta iure eos fuga vitae nihil nam magnam pariatur.</h2>
      <Link to={'./About'}>About</Link>
      <br /><br />
      <button onClick={()=>navTopage('/about')}>About</button><br /><br />
      <button onClick={()=>navTopage('/filter')}>Filter</button>
    </div>
  )
}

export default Home
