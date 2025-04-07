import React, { useEffect, useState } from 'react'

const Effect=()=> {
    let [count,setCount]=useState(0)
    // let handle=()=>{
    //     setCount(count+1)
    // }
    // // setInterval(()=>{
    // //     setCount(count+1)
    // },1000)

    useEffect(()=>{
        let timer=setInterval(()=>{
            setCount(count+1)
        },1000)
        return ()=>{
            clearInterval(timer)
        }
    },[count])
   return (
    <div>
        <h1>Count = {count}</h1>
        {/* <button onClick={handle}>Click me</button> */}
    </div>
  )
}

export default Effect

//syntax of useEffect:-

//1.setup function
//2.optimal dependency []
//3.clean up function