import React, { useEffect, useState } from 'react'

function Effect5() {
  let [fetchedData,setfetchedData]=useState("")
       
      useEffect(()=>{
          let fetchData=async()=>{
              let data =await fetch("https://dog.ceo/api/breeds/image/random")
              console.log(data);
              let newData =await data.json()
              console.log(newData);
              setfetchedData(newData)
              
          }
          fetchData()
      },[])
        return (
          <div className='container'>
              <h1>Random Dog</h1>
              <div className='joke-box'>
                  {/* <h2>Setup: {fetchedData.setup}</h2>
                  <h2>Punchline: {fetchedData.punchline}</h2> */}
                  <img src={fetchedData.message} alt="" height={200}/>
              </div>
          </div>
        )
}

export default Effect5