import React from 'react'
import { useParams,Link,useLocation} from 'react-router-dom'

const Users = () => {
  const location =useLocation()
  // console.log(location)
  const params=useParams();
  const {name}=params
  console.log(name)
  return (
    <div>
      <h1>This is {name} page</h1>
      <li class="nav-item"><Link to={'/users/maan'} state={{Name:"maan",age:20}}>Maan</Link></li>
      <li class="nav-item"><Link to={'/users/tandel'}>Tandel</Link></li>
    </div>
  )
}

export default Users
