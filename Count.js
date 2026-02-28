import React from 'react'
import{ useState }from 'react'
import '.Count.css'
const Counter = () =>{
    const[count,setCount]=useState(true);
    function change() {
        setCount(!count)
        console.log(count)
    }
    return(
        <div cla
    )
}