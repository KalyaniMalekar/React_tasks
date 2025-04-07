import axios from 'axios';
import React, { useEffect, useState } from 'react'

const SepUser=()=> {
    let [user,setUser]=useState("");
    let [id,setId]=useState(1);
    useEffect(()=>{
        async function getUser() {
            let {data}=await axios.get(`https://api.github.com/user/${id}`);
            // console.log(data);
            setUser(data);
        }
        getUser();
    },[id])
  return (
    <div>
        <h1>{user.login}</h1>
        <img src={user.avatar_url} alt="" height={200} />
        <button onClick={()=>{ setId(id+1)}}>Change User</button>
    </div>
  )
}

export default SepUser