
import React, { useEffect, useState } from 'react'

function Effect4() {
  let [fetchedData,setfetchedData]=useState("")
     
    useEffect(()=>{
        let fetchData=async()=>{
          let data =await fetch("https://yesno.wtf/api")
          console.log(data);
          let newData =await data.json ()
          console.log(newData);
          setfetchedData(newData)
            
        }
        fetchData()
    },[])
      return ( 
        <div className='container'>
            <h1>Random Yes/No</h1>
            <div className='joke-box'>
                <h2>Answer: {fetchedData.answer}</h2>
                {/* <h2>Forced: {fetchedData.forced ? "yes" : "no"}</h2> */}

                <img src={fetchedData.image} alt="" height={200}  width={200}/>
                
            </div>
        </div>
      )
}

export default Effect4