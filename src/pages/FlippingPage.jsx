import React from 'react'
import { useNavigate } from 'react-router-dom'

const FlippingPage = () => {
  const navigate = useNavigate()

  return (
    <div class="card">
      <div class="outside">
        <div class="front">
          <p>Happy Anniversary</p>
          <div class="cake">
            <div class="candle" style={{left:"70px"}}></div>
            <div class="candle" ></div>
            <div class="candle" style={{right:"70px"}}></div>
            <div class="top-layer"></div>
            <div class="middle-layer"></div>
            <div class="bottom-layer"></div>
          </div>
        </div>
        <div class="back"></div>
      </div>
      <div class="inside">
        <p>Tên đăng nhập là liên quan tui với ngiu á</p>
        <p>Còn mật khẩu thì quen thuộc lúm, tự mò ik hía hía</p>
        <h1 onClick={()=>navigate("/login")}>&#127873;</h1>
      </div>
    </div>
  )
}

export default FlippingPage