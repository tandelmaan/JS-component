import React,{useRef} from 'react'

const UseRefinfunction = () => {
  const a=useRef(null)
  function handelinput(){
    console.log("hii maan");
    // a.current.value="100";
    // a.current.style.color="red"
    // a.current.style.display="none"
    a.current.focus();
  }
  return (
    <div>
      <h1>UseRef in functional component</h1>
      <input type="text" ref={a}/>
      <button onClick={handelinput}>Click me</button>
    </div>
  )
}

export default UseRefinfunction
