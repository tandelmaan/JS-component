import React,{useState,useMemo} from 'react'

const Usememohook = () => {
  const [count,setcount]=useState(0);
  const [item,setitem]=useState(10);
  const multicount = useMemo(function multicountmemo(){
    console.log("checking")
    return count*5;
  },[count])
  return (
    <div>
      <h1>Use memo hooks in react js</h1>
      <h1>Count is : {count}</h1>
      <h1>Item is : {item}</h1>
      <h1>Multi count is : {multicount}</h1>
      <button onClick={()=>setcount(count+1)}>Update Count</button>
      <button onClick={()=>setitem(item*10)}>Update Count</button>
    </div>
  )
}

export default Usememohook
