import React,{useRef} from 'react'
import ForwardRefinfunction1 from './ForwardRefinfunction1';

const ForwardRefinfunction = () => {
  const a=useRef(null);
  function changeinput(){
    console.log("maan")
    // a.current.value="1000"
    a.current.style.color="red"
    a.current.focus()
  }
  return (
    <div>
      <h1>Forward Ref in function</h1>
      <ForwardRefinfunction1 ref={a} />
      <button onClick={changeinput}> Click me </button>
    </div>
  )
}

export default ForwardRefinfunction
