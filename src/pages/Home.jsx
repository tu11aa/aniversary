import React from 'react'
import "../css/giftbox.css"

const Home = () => {
  return (
    <>
      <div className="giftbox" onClick={()=>console.log("Clicked")}>
        <div className="cover">
            <div></div>
        </div>
        
        <div className="box"></div>
      </div>
    </>
  )
}

export default Home