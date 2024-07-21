import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Controllcomponent from './Controllcomponent';
import ForwardRefinfunction from './ForwardRefinfunction';
import Refinclass from './Refinclass';
import Uncontrolledcompo from './Uncontrolledcompo';
import UseRefinfunction from './UseRefinfunction';
import Usememohook from './Usememohook';
import Home from './Component/Home';
import About from './Component/About';
import Navbar from './Navbar';
import Project from './Component/Project';
import Experience from './Component/Experience';
import Page404 from './Page404'
import Users from './Component/Users';
import Filter from './Component/Filter';
import Compony from './Component/Compony';
import Contact from './Component/Contact';
import Other from './Component/Other';
import Channel from './Component/Channel';
import Login from './Component/Login';
import Protected1 from './Component/Protected1';

function App() {
  return (
    <div>
      {/* <Usememohook/> */}
      {/* <Refinclass/> */}
      {/* <UseRefinfunction/> */}
      {/* <ForwardRefinfunction/> */}
      {/* <Controllcomponent/> */}
      {/* <Uncontrolledcompo/> */}
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Protected1 Component={Home}/>}/>   
        <Route path='/about' element={<Protected1 Component={About}/>}/>   
        <Route path='/project' element={<Project/>}/>   
        <Route path='/experience' element={<Experience/>}/>  
        <Route path='/users/:name' element={<Users/>}/>  
        <Route path='/users' element={<Users/>}/>  
        <Route path='/filter' element={<Filter/>}/>   
        <Route path='/login' element={<Login/>}/>   
        <Route path='/contact/' element={<Contact/>}>
            <Route path='compony' element={<Compony/>}/>
            <Route path='channel' element={<Channel/>}/>
            <Route path='other' element={<Other/>}/>
        </Route> 


        <Route path='/*' element={<Navigate to={'/'}/>}/>{/* navigate kare home page par */}
        {/* <Route path='/*' element={<Page404/>}/>    */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
