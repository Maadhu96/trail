import React from 'react'
import { useState } from 'react';

const Register = () => {
    let[state,setState]=useState({
        name:"",phone:"",email:"",gender:"",password:""
    })
   let {name,phone,email,gender,password}=state;
let handleChange=e=>{
let {name,value}=e.target;
setState({...state,[name]:value})
}
let handleSubmit=(e)=>{
e.preventDefault()
window.localStorage.setItem("name",name);
window.localStorage.setItem("phone",phone);
window.localStorage.setItem("email",email);
window.localStorage.setItem("gender",gender);
window.localStorage.setItem("password",password);
}
  return (
    <div>
    <section>
        <article>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id='name' name="name" placeholder='enter name' value={name} onChange={handleChange} required/>
                </div>
                <div>
                    <label htmlFor="email">email</label>
                    <input type="email" id='email' name="email" placeholder='enter email' value={email} onChange={handleChange} required/>
                </div>
                <div>
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id='phone' name="phone" placeholder='enter phone number' maxLength="10" value={phone} onChange={handleChange} required />
                </div>
                <div value={gender} onChange={handleChange}>
                    <label htmlFor="gender">Gender</label>
                    <input type="radio" name='gender' id='male' value="Male"  required/> male
                    <input type="radio" name="gender" id='female' value="Female" />female
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' name="password" placeholder='enter password' value={password} onChange={handleChange} required />
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </article>
    </section>
    </div>
  )
}

export default Register
