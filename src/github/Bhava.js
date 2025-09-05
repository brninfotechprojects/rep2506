import React, {  useState } from 'react'

function Bhava() {
  let [dice,setdice]=useState([]);
  let [roll,setroll]=useState(null);
  let dieceroll=()=>{
    let values =[];
    for(let i=0;i<roll;i++){
      let randomnumber=Math.floor(Math.random()*6+1);
      values.push(randomnumber);
      
    }
    setdice(values)
  }
  let incremeantroll=()=>{
     if(roll>=0){
      if(roll<6){
         return dice.join(" ,")
      }
      else{
        window.alert("the maximum number is reached")
      }
     }
     return "not rolled"
  }
  return (
    <div>
      <button type='button' onClick={()=>{
      dieceroll()
      }}>roll</button>
      <br></br>
      <button type='button' onClick={()=>{
        setroll(roll+1)
        console.log(roll)
      }} style={{position:"relative",left:"150px", bottom:"100px"}}>increment of dice  {`${roll}`}</button>
      <br></br>
      <p style={{position:"relative",left:"100px"}} >{incremeantroll()}</p>
    </div>
  )
}

export default Bhava
