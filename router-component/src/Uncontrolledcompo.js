import React,{useRef} from 'react'

const Uncontrolledcompo = () => {
  const a=useRef(null)
  const b=useRef(null)
  function hendalform(e){
    e.preventDefault()
    console.log("value 1 :",a.current.value)
    console.log("value 2 :",b.current.value)
    let c=document.getElementById("c").value
    console.log("value 3 :",c)

  }
  return (
    <div>
      <h1>Uncontrolled component by using Ref</h1>
      <form action="" onSubmit={hendalform}>
        <input type="text" ref={a}/>
        <br /><br />
        <input type="text" ref={b} />
        <br /><br />
        <input type="text" id='c' />
        <br /><br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Uncontrolledcompo
