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
   add=(e)=>{
    e.preventDefault();
    const {input1,input2}=this.state
    this.setState({
      result : (parseInt(input1)+parseInt(input2))
    })
   }
   sub=(e)=>{
    e.preventDefault();
    const {input1,input2}=this.state
   }
   mul=(e)=>{
    e.preventDefault();
    const {input1,input2}=this.state
  }
  div=(e)=>{
    e.preventDefault(); 
    const {input1,input2}=this.state
  }
  mod=(e)=>{
    e.preventDefault();
    const {input1,input2}=this.state
  }
  clr=(e)=>{
    e.preventDefault(); 
    const {input1,input2}=this.state
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
              <button onClick={this.add}> + </button>
              <button onClick={this.sub}> - </button>
              <button onClick={this.mul}> * </button>
              <button onClick={this.div}> / </button>
              <button onClick={this.mod}> % </button>
              <button onClick={this.clr}> C </button>
            </div>
            <div>
              <h2>{result}</h2>
            </div>
         
        </form>
      </div>
    )
  }
}

export default Calculator
