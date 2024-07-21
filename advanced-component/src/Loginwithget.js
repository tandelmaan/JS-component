import { useEffect, useState } from 'react';
import  Table  from 'react-bootstrap/Table';

function Loginwithget() {
  const [data,setdata]=useState([]);
  useEffect(()=>{
    getList()
  },[])
  // console.log(data)
  function getList(){
    fetch("http://localhost:3000/students").then((result)=>{
      result.json().then((resp)=>{
        // console.log("result : ",resp)
        setdata(resp)
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
  return (
    <div className="App">
      <h1>hii maan</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
          <th>id</th>
          <th>name</th>
          <th>en_no</th>
          <th>button</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item)=>
          <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.en_no}</td>
            <td><button onClick={()=>deleteData(item.id)}>Delete</button></td>
          </tr>
          )}
        </tbody>
        </Table>
      </div>
  );
}

export default Loginwithget;
