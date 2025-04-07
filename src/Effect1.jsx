import React, { useEffect,useState } from 'react'

const Effect1 = () => {

let [fetchedData,setfetchedData]=useState("")
 
useEffect(()=>{
    let fetchData=async()=>{
        let data =await fetch("https://api.github.com/users")
        console.log(data);
        let newData =await data.json()
        console.log(newData);
        setfetchedData(newData)
        
    }
    fetchData()
},[])
  return (
    <div> 
        {
          fetchedData&&fetchedData.map((ele)=>{
            return <h1 key={ele.login}><span>{ele.id}-</span>{ele.login}</h1>
        })}
    </div>
  )
}

export default Effect1