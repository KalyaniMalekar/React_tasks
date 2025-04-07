import React, { useEffect, useState } from 'react'

function Effect2() {
    let [fetchedData,setfetchedData]=useState("")
     
    useEffect(()=>{
        let fetchData=async()=>{
            let data =await fetch("https://official-joke-api.appspot.com/random_joke")
            console.log(data);
            let newData =await data.json()
            console.log(newData);
            setfetchedData(newData)
            
        }
        fetchData()
    },[])
      return (
        <div className='container'>
            <h1>Random Jokes</h1>
            <div className='joke-box'>
                <h2>Setup: {fetchedData.setup}</h2>
                <h2>Punchline: {fetchedData.punchline}</h2>
                
            </div>
        </div>
      )
}

export default Effect2