import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Protected = ({children}) => {
  const navigate = useNavigate()  

  const isLogin = localStorage.getItem("isLogin")

  useEffect(()=>{
    if (isLogin === "false") navigate("/login")
  }, [navigate, isLogin])

  return isLogin !== "false" && children
  // return children
}

export default Protected