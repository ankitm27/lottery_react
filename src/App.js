import React from 'react';
import logo from './logo.svg';
import './App.css';
// import web3 from './web3.js';
import lottery from "./lottery.js";

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      manager:""
    }
  }
  async componentDidMount (){
    const manager = await lottery.methods.manager().call();
    this.setState({manager:manager})
  }
  render(){
  return (
    <div>
      <h1>lottery contract</h1>
      <p>this contract is manager by {this.state.manager} </p>
    </div>
  );
  }
}

export default App;
