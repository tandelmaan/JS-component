import React,{forwardRef} from 'react'

const ForwardRefinfunction1 = (props,b) => {
  return (
    <div>
      <input type="text" ref={b}/>
    </div>
  )
}

export default forwardRef(ForwardRefinfunction1)
