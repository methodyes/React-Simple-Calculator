import React, { Component } from 'react'

 class Calculator extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        title : "React basic calculator",
        input1: "",
        input2:"",
        result:"",
     }
   }
   onChangeBtn=(e)=>{
    const {name,value}=e.target
    this.setState({
      [name]:value
    })
   }
   
  render() {
    const {title,input1,input2,result}=this.state
    return (
      <div>
        <h1>{title}</h1>
        <form>
          <div>
            <label>Number 1  </label>
            <input 
            type="text"
            placeholder="type number"
            value={input1}
            name="input1"
            onChange={this.onChangeBtn}/>
            </div>
            <div>
            <label>Number 2 </label>
            <input
            type="text"
            placeholder="type number"
            value={input2}
            name="input2"
            onChange={this.onChangeBtn}/>
            </div>
            <div>
              <button> + </button>
              <button> - </button>
              <button> * </button>
              <button> / </button>
              <button> % </button>
              <button> C </button>
            </div>
            <div>
              <h2></h2>
            </div>
         
        </form>
      </div>
    )
  }
}

export default Calculator
