import React from 'react';
import './Controller.css';

function Controller({arr,updateArray,generateArray,num,towerWidth,updateProperties}){
  const timeout = ms => new Promise(resolve => setTimeout(resolve, ms));
  var speed = 100;
  //Select Sort
  var selectSort = async () => {
    var A = arr;
    for(let i=0;i<A.length-1;i++){
      var min = A[i].val;
      var pos = i;
      for(var j=i+1;j<A.length;j++){
        await timeout(speed);
        if(A[j].val < min){
          min = A[j].val;
          pos = j;
        }
        for(let k=0;k<A.length;k++){
          if(k === i){
            A[k].col = "#ff1900";
          }else if (k === j) {
            A[k].col = "#5eff00";
          }else if (k === pos) {
            A[k].col = "#ffa600";
          }else if ( k < i) {
            A[k].col = "#fbff00";
          }else {
            A[k].col = "#4c00ff";
          }
        }
        updateArray(A);
      }
      A[pos].val = A[i].val;
      A[i].val = min;
    }
    for(let k=0;k<A.length;k++){
        A[k].col = "#fbff00";
    }
    updateArray(A);
  }

  //Bubble Sort
  var bubbleSort = async () => {
    var sorted = 0;
    var A = arr;
    for(var i=0;i<A.length  && sorted === 0;i++){
      sorted = 1;
      for(var j=0;j<A.length-i-1;j++){
        await timeout(speed);
        if(A[j].val > A[j+1].val){
          var temp = A[j].val;
          A[j].val = A[j+1].val;
          A[j+1].val = temp;
          sorted = 0;
        }
        for(let k=0;k<A.length;k++){
          if(k === j){
            A[k].col = "#ff1900";
          }else if (k === j + 1) {
            A[k].col = "#5eff00";
          }else if ( k >= A.length - i) {
            A[k].col = "#fbff00";
          }else {
            A[k].col = "#4c00ff";
          }
        }
        updateArray(A);
      }
    }
    for(let k=0;k<A.length;k++){
        A[k].col = "#fbff00";
    }
    updateArray(A);
  }

  //Insert Sort
  var insertSort = async() => {
    var A = arr;
    var min = A[0].val;
    var pos = 0;
    for(let i=1;i<A.length;i++){
      await timeout(speed);
      if(A[i].val < min){
        min = A[i].val;
        pos = i;
      }
      for(let k=0;k<A.length;k++){
        if(k === i){
          A[k].col = "#ff1900";
        }else if (k === pos) {
          A[k].col = "#ffa600";
        }else {
          A[k].col = "#4c00ff";
        }
      }
      updateArray(A);
    }
    A[pos].val = A[0].val;
    A[0].val = min;
    for(let i=1;i<A.length;i++){
      var j = i;
      while(A[j].val < A[j - 1].val){
        await timeout(speed);
        var temp = A[j].val;
        A[j].val = A[j - 1].val;
        A[j - 1].val = temp;
        j--;
        for(let k=0;k<A.length;k++){
          if(k === j){
            A[k].col = "#ff1900";
          }else if (k === j - 1) {
            A[k].col = "#5eff00";
          }else {
            A[k].col = "#4c00ff";
          }
        }
        updateArray(A);
      }
    }
    for(let k=0;k<A.length;k++){
        A[k].col = "#fbff00";
    }
    updateArray(A);
  }

  var manageArray = (event) => {
    num = event.target.value;
    towerWidth = (window.innerWidth * 0.8) / (num / 2) - 10;
    document.getElementById("v").innerHTML = num;
    updateProperties(num,towerWidth);
    generateArray(num);
  }

  return (
    <div className = "controlBar">
    <button onClick = {function(event){generateArray(num);}}> Generate New Array </button>
    <div className = "seperator"></div>
    <button onClick = {bubbleSort}> Bubble Sort </button>
    <button onClick = {insertSort}> Insert Sort </button>
    <button onClick = {selectSort}> Selection Sort </button>
    <div className = "seperator"></div>
    <span id="v"> {num}</span>
    <input type="range" id="vol" name="vol" min="5" max="100" onInput={manageArray} onChange={manageArray} />
    </div>
  )

}

export default Controller;
