// import React from 'react'
// import { Link } from 'react-router-dom'

// const Navbar = () => {
//   return (
//     <div>
//       <ul>
//         <li><Link to={'/'}>Home</Link>
//         </li>
//         <li><Link to={'/About'}>About</Link>
//         </li>
//         <li><Link to={'/Project'}>Project</Link>
//         </li>
//       </ul>
        
//     </div>
//   )
// }

// export default Navbar

import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
       <nav class="navbar">
        <ul class="nav-list">
            <li class="nav-item"><NavLink to={'/'}>Home</NavLink></li>
            <li class="nav-item"><NavLink to={'/project'}>Project</NavLink></li>
            <li class="nav-item"><NavLink to={'/experience'}>Experience</NavLink></li>
            <li class="nav-item"><NavLink to={'/about'}>About</NavLink></li>
            <li class="nav-item"><NavLink to={'/users'}>User</NavLink></li>
            <li class="nav-item"><NavLink to={'/filter'}>Filter</NavLink></li>
            <li class="nav-item"><NavLink to={'/contact'}>Contact</NavLink></li>
            <li class="nav-item"><NavLink to={'/login'}>Login</NavLink></li>
            
        </ul>
    </nav>
    </div>
  )
}

export default Navbar
