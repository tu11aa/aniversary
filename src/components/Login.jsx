import React, { useState } from 'react';
import "../login.scss"

export const Login = () => {
  const sampleUsername = "Tu"
  const samplePassword = "12345"
  const formData = useState({username:"", password:""})

  

  return (
    <div className="container">
      <form>
        <p>Welcome</p>
        <input type="email" placeholder="Email"/><br/>
        <input type="password" placeholder="Password"/><br/>
        <input type="button" value="Sign in"/><br/>
        <a href="#">Forgot Password?</a><br/>
      </form>

      <div class="drops">
        <div class="drop drop-1"/>
        <div class="drop drop-2"/>
        <div class="drop drop-3"/>
        <div class="drop drop-4"/>
        <div class="drop drop-5"/>
      </div>
    </div>
  )
}
