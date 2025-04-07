import React, { useState } from 'react'
import Style from './Cantrolled.module.css'

function Cantrolled() {
    // let [user , setUser]=useState("")
    // let [password, setPassword] = useState("")

    let [form,setForm]=useState({
      user:"",
      password:"",
      comment:"",
      gender:""
    })

    let {user,password,comment,gender}=form; //destructuring the object
    let handleChange=(event)=>{
      setForm({
        ...form, //spreading the object
        [event.target.name]:event.target.value})
    }
    let handleSubmit = (event) => {
      event.preventDefault()
      console.log(form)
      // let User = {
      //   Username : user,
      //   Password : password
      // }
      // console.log(User);
    }

  return (
    <div>
        <section  style={Style.section}>
            <form action="" onSubmit={handleSubmit}>
                <h1>Login Form</h1>
                <input type="text" placeholder="Username" value={user} onChange={handleChange} name="user"/>
                <input type="password" placeholder="Password" value={password} onChange={handleChange} name="password"/>
                <textarea placeholder='comment' name="comment" value={comment} onChange={handleChange}></textarea>
                <br />
                <label htmlFor="">Gender</label>
                <input type="radio" name="gender" value="male" onChange={handleChange}/>male
                <input type="radio" name="gender" value="female" onChange={handleChange}/>Female
                <br /><br />
                <button>Submit</button>
            </form>
        </section>
    </div>

  )
}

export default Cantrolled