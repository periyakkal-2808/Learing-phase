import React from 'react'
import { useState } from 'react'
import './Pinky.css'
const counter = () =>{
    const [count,setCount]=useState(1);
    function logs(){
        setCount(count * 2);
    }
    
    return(
    <center>
        <div>
        <h1>{count}</h1>
        <button className='btn_Counter' onclick={logs}>click</button>

        </div></center>
    )
}
export default Pinky