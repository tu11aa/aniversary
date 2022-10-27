import React from 'react'
import { useNavigate } from 'react-router-dom'

const FlippingPage = () => {
  const navigate = useNavigate()

  return (
    <div className="card">
      <div className="outside">
        <div className="front">
          <p>Happy Anniversary</p>
          <div className="cake">
            <div className="candle" style={{left:"70px"}}></div>
            <div className="candle" ></div>
            <div className="candle" style={{right:"70px"}}></div>
            <div className="top-layer"></div>
            <div className="middle-layer"></div>
            <div className="bottom-layer"></div>
          </div>
        </div>
        <div className="back"></div>
      </div>
      <div className="inside">
        <p>Tên đăng nhập tên tui cộng với ngiu é</p>
        <p>Còn mật khẩu thì quen thuộc lúm, tự mò ik hía hía</p>
        <h1 onClick={()=>navigate("/login")} style={{cursor: "pointer"}}>&#127873;</h1>
      </div>
    </div>
  )
}

export default FlippingPage