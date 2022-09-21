import React from 'react'
import { useReducer } from 'react'
import Confetti from '../components/Confetti'
import box from "../assets/box.png";
import boxLid from "../assets/box-lid.png";
import kuku from "../assets/jump-character.png";
import { useNavigate } from 'react-router-dom';

const initState = {
  jump: "",
  rotated: "",
  rotating: ""
}

const Home = () => {
  const navigate = useNavigate()

  const [state, setState] = useReducer(
    (state, newState) => ({
      ...state,
      ...newState
    }),
    initState 
  )

  const { rotating, rotated, jump } = state

  const handleClick = () => {
    if (jump === ""){
        setState({ rotating: "rotating" });
      setTimeout(() => {
        setState({ rotated: "rotated" }); 
      }, 1000);
      setTimeout(() => {
        setState({ jump: "jump" });
      }, 300);
    }
    else {
      navigate("/login")
    }
  }

  return (
    <>
      <Confetti open={jump === "jump"}/>
      <div className="img-container">
        <img className={`kuku ${jump}`} src={kuku} alt="kuku" />
        <button className="box" onClick={() => handleClick()}>
          <img src={box} alt="box" />
        </button>
        <img
          className={`lid move ${rotating} ${rotated}`}
          src={boxLid}
          alt="box-lid"
        />
      </div>
    </>
  )
}

export default Home