import { useEffect, useState } from 'react';
import  Table  from 'react-bootstrap/Table';

function Updatedataiform() {
  const [data,setdata]=useState([]);
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [number1,setNumber1]=useState("");
  const [userid,setUserid]=useState(null)
  useEffect(()=>{
    getList()
  },[])
  // console.log(data)
  function getList(){
    fetch("http://localhost:3000/students").then((result)=>{
      result.json().then((resp)=>{
        // console.log("result : ",resp)
        setdata(resp);
        setName(resp[0].name)
        setEmail(resp[0].email)
        setNumber1(resp[0].number1)
        setUserid(resp[0].id)
      }
    )})
  }
  function deleteData(id){
    fetch(`http://localhost:3000/students/${id}`,{
      method:'DELETE'
      }).then((result)=>{
        result.json().then((resp)=>{
          console.log(resp)
          getList()
        })
      })
  }
  function selectUser(id){
    console.log(data[id-2])
    let item2 =data[id-2];
    setName(item2.name)
    setEmail(item2.email)
    setNumber1(item2.en_no)
    setUserid(item2.id)
  }
  // function selectUser(id) {
  //   const selectedUser = data.find(user => user.id === id);
  //   if (selectedUser) {
  //     setName(selectedUser.name);
  //     setEmail(selectedUser.email);
  //     setEmail(selectedUser.number);
  //     setNumber1(selectedUser.id);
  //   } else {
  //     console.error(`User with id ${id} not found`);
  //   }
  // }
  function updateUser(){
    let data2 ={name,email,number1,userid}
    fetch(`http://localhost:3000/students/${userid}`,{
      method:'PUT',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },body:JSON.stringify(data2)
      
      }).then((result)=>{
        result.json().then((resp)=>{
          console.log(resp)
          getList()
        })
      })
  }
  return (
    <div className="App">
      <h1>Update data in Form</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
          <th>id</th>
          <th>name</th>
          <th>Emails</th>
          <th>Enrollment no</th>
          <th>Delete</th>
          <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item,i)=>
          <tr key={i}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.number1}</td>
            <td><button onClick={()=>deleteData(item.id)}>Delete</button></td>
            <td><button onClick={()=>selectUser(item.userid)}>update</button></td>
          </tr>
          )}
        </tbody>
        </Table>
        <div>
          <h1>Login Data</h1>
          <form action="">
            <input type="name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
            <br /><br />
            <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            <br /><br />
            <input type="number" value={number1} onChange={(e)=>{setNumber1(e.target.value)}}/>
            <br /><br />  
            <button type='button' onClick={()=>updateUser()}>Update Data</button>
          </form>
        </div>
      </div>
  );
}

export default Updatedataiform;


// import React, { useEffect, useState } from 'react';
// import Table from 'react-bootstrap/Table';

// function UpdateDataForm() {
//   const [data, setData] = useState([]);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [number, setNumber] = useState("");
//   const [userId, setUserId] = useState(null);

//   useEffect(() => {
//     getList();
//   }, []);

//   function getList() {
//     fetch("http://localhost:3000/students")
//       .then(response => response.json())
//       .then(resp => {
//         setData(resp);
//         if (resp.length > 0) {
//           setName(resp[0].name);
//           setEmail(resp[0].email);
//           setNumber(resp[0].number);
//           setUserId(resp[0].id);
//         }
//       })
//       .catch(error => console.error('Error fetching data:', error));
//   }

//   function deleteData(id) {
//     fetch(`http://localhost:3000/students/${id}`, { method: 'DELETE' })
//       .then(response => response.json())
//       .then(resp => {
//         console.log(resp);
//         getList();
//       })
//       .catch(error => console.error('Error deleting data:', error));
//   }

//   function selectUser(id) {
//     const selectedUser = data.find(user => user.id === id);
//     if (selectedUser) {
//       setName(selectedUser.name);
//       setEmail(selectedUser.email);
//       setNumber(selectedUser.number);
//       setUserId(selectedUser.id);
//     }
//   }

//   function updateUser() {
//     const updatedData = { name, email, number };
//     fetch(`http://localhost:3000/students/${userId}`, {
//       method: 'PUT',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(updatedData)
//     })
//     .then(response => response.json())
//     .then(resp => {
//       console.log(resp);
//       getList();
//     })
//     .catch(error => console.error('Error updating data:', error));
//   }

//   return (
//     <div className="App">
//       <h1>Update Data in Form</h1>
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Number</th>
//             <th>Delete</th>
//             <th>Update</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item, i) =>
//             <tr key={i}>
//               <td>{item.id}</td>
//               <td>{item.name}</td>
//               <td>{item.email}</td>
//               <td>{item.number}</td>
//               <td><button onClick={() => deleteData(item.id)}>Delete</button></td>
//               <td><button onClick={() => selectUser(item.id)}>Update</button></td>
//             </tr>
//           )}
//         </tbody>
//       </Table>
//       <div>
//         <h1>Update User Data</h1>
//         <form>
//           <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
//           <br /><br />
//           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
//           <br /><br />
//           <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} placeholder="Number" />
//           <br /><br />
//           <button type="button" onClick={updateUser}>Update Data</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default UpdateDataForm;
