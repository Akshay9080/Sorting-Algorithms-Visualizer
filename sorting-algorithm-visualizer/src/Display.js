import React from 'react';

function Display({arr,updateArray,generateArray}) {

  const timeout = ms => new Promise(resolve => setTimeout(resolve, ms));
  var num = 6;
  var wid = 40;

  //Select Sort
  var selectSort = async () => {
    var A = arr;
    for(let i=0;i<A.length-1;i++){
      var min = A[i].val;
      var pos = i;
      for(var j=i+1;j<A.length;j++){
        await timeout(200);
        if(A[j].val < min){
          min = A[j].val;
          pos = j;
        }
        for(let k=0;k<A.length;k++){
          if(k === i){
            A[k].col = "red";
          }else if (k === j) {
            A[k].col = "green";
          }else if (k === pos) {
            A[k].col = "orange";
          }else if ( k < i) {
            A[k].col = "yellow";
          }else {
            A[k].col = "blue";
          }
        }
        updateArray(A);
      }
      A[pos].val = A[i].val;
      A[i].val = min;
    }
    for(let k=0;k<A.length;k++){
        A[k].col = "yellow";
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
        await timeout(200);
        if(A[j].val > A[j+1].val){
          var temp = A[j].val;
          A[j].val = A[j+1].val;
          A[j+1].val = temp;
          sorted = 0;
        }
        for(let k=0;k<A.length;k++){
          if(k === j){
            A[k].col = "red";
          }else if (k === j + 1) {
            A[k].col = "green";
          }else if ( k >= A.length - i) {
            A[k].col = "yellow";
          }else {
            A[k].col = "blue";
          }
        }
        updateArray(A);
      }
    }
    for(let k=0;k<A.length;k++){
        A[k].col = "yellow";
    }
    updateArray(A);
  }

  //Insert Sort
  var insertSort = async() => {
    var A = arr;
    var min = A[0].val;
    var pos = 0;
    for(let i=1;i<A.length;i++){
      await timeout(200);
      if(A[i].val < min){
        min = A[i].val;
        pos = i;
      }
      for(let k=0;k<A.length;k++){
        if(k === i){
          A[k].col = "red";
        }else if (k === pos) {
          A[k].col = "orange";
        }else {
          A[k].col = "blue";
        }
      }
      updateArray(A);
    }
    A[pos].val = A[0].val;
    A[0].val = min;
    for(let i=1;i<A.length;i++){
      var j = i;
      while(A[j].val < A[j - 1].val){
        await timeout(200);
        var temp = A[j].val;
        A[j].val = A[j - 1].val;
        A[j - 1].val = temp;
        j--;
        for(let k=0;k<A.length;k++){
          if(k === j){
            A[k].col = "red";
          }else if (k === j - 1) {
            A[k].col = "green";
          }else {
            A[k].col = "blue";
          }
        }
        updateArray(A);
      }
    }
    for(let k=0;k<A.length;k++){
        A[k].col = "yellow";
    }
    updateArray(A);
  }

  var manageArray = (event) => {
    num = event.target.value;
    wid = 800 / num - 10;
    document.getElementById("v").innerHTML = num;
    generateArray(num);
  }

  return(
    <div>
    <div style = {{height: "600px",
    width: "800px",
    margin: "50px auto",
    backgroundColor: "lightgreen",
    textAlign: "center",
    display: "flex",
    flexDirection: "row"}}>

    {
      arr.map(ele => (
      <div style = {{height: ele.val + "0px", width: wid + "px",backgroundColor: ele.col,margin: "0 5px"}} key = {ele.id}> {ele.val} </div>
    ))}
    </div>
    <button onClick = {bubbleSort}> Bubble Sort </button>
    <button onClick = {insertSort}> Insert Sort </button>
    <button onClick = {selectSort}> Selection Sort </button>
    <button onClick = {function(event){generateArray(num);}}> Generate New Array </button>
    <input type="range" id="vol" name="vol" min="5" max="25" onInput={manageArray} onChange={manageArray} />
    <p id="v">{num}</p>
    </div>
  )
}

export default Display;
