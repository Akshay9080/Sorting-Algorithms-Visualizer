import React, {Component} from 'react';
import './App.css';
import Display from './Display';

class App extends Component {
  state = {
    arr : [{id: 0, val: 10,col: "blue"},
    {id: 1, val: 29,col: "blue"},
    {id: 2, val: 37,col: "blue"},
    {id: 3, val: 25,col: "blue"},
    {id: 4, val: 15,col: "blue"},
    {id: 5, val: 12,col: "blue"}
    ]
  }

  generateArray = (num) => {
    var A = [];
    for(var i=0;i<num;i++){
      var ele = {
        id: i,
        val: Math.round(Math.random() * 55) + 5,
        col: "blue"
      }
      A.push(ele);
    }
    this.setState({arr: A});
  }

  updateArray = (A) => {
    var a = A;
    this.setState({arr: a});
  }

  render(){
    return (
      <div className="App">
        <Display arr = {this.state.arr} updateArray = {this.updateArray} generateArray = {this.generateArray} />
      </div>
    );
  }
}

export default App;
