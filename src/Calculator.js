import React, { Component } from 'react'

 class Calculator extends Component {
  render() {
    return (
      <div>
        <form>
          <div>
            <label>Number 1 : </label>
            <input/>
            </div>
            <div>
            <label>Number 2 :</label>
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
