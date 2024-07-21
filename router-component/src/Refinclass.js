import React,{Component,createRef} from 'react'

class Refinclass extends Component {
  constructor(){
    super();
    this.inputref=createRef()
  }
  componentDidMount(){
    this.inputref.current.value=(1000)
  }
  getvalue(){
    console.log(this.inputref.current.value)
    this.inputref.current.style.color=("red")
    this.inputref.current.style.backgroundColor=("yellow")
  }
  render(){
    return (
      <div>
        <h1>Ref in react js in class component</h1>
        <input type="text" ref={this.inputref} />
        <button onClick={()=>this.getvalue()}>click</button>
      </div>
    )
  }
}

export default Refinclass
