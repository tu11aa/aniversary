import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import "../css/login.scss"
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const navigate = useNavigate()

  const sampleUsername = "Tu"
  const samplePassword = "12345"
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (userName === sampleUsername && password === samplePassword) navigate("/home")
    else toast.warn("Wrong user name or password")
  }

  return (
    <div className="container">
      <form>
        <p>Welcome</p>
        <input type="email" placeholder="User name" value={userName} onChange={(e)=>{setUserName(e.target.value)}}/><br/>
        <input type="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/><br/>
        <input type="submit" value="Sign in"  onClick={handleSubmit}/><br/>
        <Link to="/forgotpassword">Forgot Password?</Link><br/>
      </form>

      <div className="drops">
        <div className="drop drop-1"/>
        <div className="drop drop-2"/>
        <div className="drop drop-3"/>
        <div className="drop drop-4"/>
        <div className="drop drop-5"/>
      </div>
    </div>
  )
}

export default Login
