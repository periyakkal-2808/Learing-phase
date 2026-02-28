import React from 'react'
import { useState } from 'react'
import './Counter.css'
const Counter = () =>{
    const [str,setStr]=useState(1);
    const[furniture,setFurniture]=useState({
        name:"chair",
        screw: 100,
        wheels: 50,
        seat: 50,
        available:true,
        price:1000
    })
    console.log(furniture)
    function logs(furniture){
        setFurniture({
            ...furniture,
            wheels: 100
        })

    }
        
    
    return(
        <div className='counter'>
        <h1>{str}</h1>
        <button className='btn_Counter' onclick={logs}>click</button>

        </div>
    )
}
export default Counter