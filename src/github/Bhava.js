import React, {  useState } from 'react'

function Bhava() {
  let [dice,setdice]=useState([]);
  let [roll,setroll]=useState(0);
  let dieceroll=()=>{
    let values =[];
    for(let i=0;i<=roll;i++){
      let randomnumber=Math.floor(Math.random()*6+1);
      values.push(randomnumber);
      
    }
    setdice(values)
  }
  return (
    <div>
      <button type='button' onClick={()=>{
      dieceroll()
      }}>roll</button>
      <button type='button' onClick={()=>{
        setroll(roll+1)
        console.log(roll)
      }}></button>
      <p >{dice.length>0 ? dice.join(" ,"):"not rolled"}</p>
    </div>
  )
}

export default Bhava
