import React, {Component} from 'react';
import './App.css';
import Display from './Display';
import Controller from './Controller';

class App extends Component {
  state = {
    arr : [],
    num: 50,
    towerWidth: 40
  }

  generateArray = (num) => {
    var A = [];
    var max_height = window.innerHeight * 0.8 - 30;
    for(var i=0;i<num;i++){
      var ele = {
        id: i,
        val: Math.round(Math.random() * max_height) + 20,
        col: "#4c00ff"
      }
      A.push(ele);
    }
    this.setState({arr: A});
  }

  updateArray = (A) => {
    var a = A;
    this.setState({arr: a});
  }

  updateProperties = (num, width) => {
    var n = num;
    var w = (width < 50) ? width : this.state.towerWidth;
    this.setState({num: n, towerWidth: w});
  }

  render(){
    return (
      <div className="App">

        <Controller arr = {this.state.arr} updateArray = {this.updateArray}
          generateArray = {this.generateArray} num = {this.state.num}
          towerWidth = {this.state.towerWidth}
          updateProperties = {this.updateProperties}/>

        <Display arr = {this.state.arr} num = {this.state.num}
          towerWidth = {this.state.towerWidth}/>
      </div>
    );
  }
}

export default App;
