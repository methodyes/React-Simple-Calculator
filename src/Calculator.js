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
   
  render() {
    const {title,input1,input2,result}=this.state
    return (
      <div>
        <h1>{title}</h1>
        <form>
          <div>
            <label>Number 1  </label>
            <input/>
            </div>
            <div>
            <label>Number 2 </label>
            <input/>
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
