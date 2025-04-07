import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Contact() {
  let [data,setData]=useState({
    firstName:"",
    lastName:"",
    email:"",
    phone:"",
    message:""
  })



  let {firstName,lastName,email,phone,message}=data;
  let handleChange=(event)=>{
    setData({
      ...data,
      [event.target.name]:event.target.value
    })
  }

  let navigate=useNavigate();

  let handleSubmit=(event)=>{
    event.preventDefault();
    console.log(data);
    alert("Message Sent Sucessfully!!!");
    navigate("/home");
  }
  return (
    <div className="container">
      <div className="contact-box">
        <div className="right-side">
          <h1>GET IN TOUCH</h1>
          <form onSubmit={handleSubmit}> 
            <div className="input-group">
              <input type="text" placeholder="First Name" required name="firstName" value={firstName} onChange={handleChange}/>
              <input type="text" placeholder="Last Name" required name="lastName" value={lastName} onChange={handleChange}/>
            </div>
            <input type="email" placeholder="Email" required name="email" value={email} onChange={handleChange}/>
            <input type="tel" placeholder="Phone" required name="phone" value={phone} onChange={handleChange}/>
            <textarea placeholder="Message" required name="message" value={message} onChange={handleChange}></textarea>
            <button type="submit">Send</button>
          </form>
        </div>

        <h2>Name:{data.firstName} {data.lastName}</h2>
      </div>
    </div>
  );
}

export default Contact;
