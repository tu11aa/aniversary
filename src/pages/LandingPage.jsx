import React from 'react'
import ChatBox from '../components/LandingPage/ChatBox'
import Section from '../components/LandingPage/Section'
import Zoom from 'react-reveal/Zoom';
import { useNavigate } from 'react-router-dom';


const LandingPage = () => {
  const paragraphs = [
    "Funny, smart, silly, cute, pretty and fantastic. Animesh, You truly are a girl who is beautiful inside out. On your birthday today, I just want you to know how lucky I am to have you in my life, happy birthday to you!"
  ]

  const navigate = useNavigate()

  return (
    <div className='hint-container'>
      <ChatBox/>
      <Section backgroundID="bg-image1" header="Amazing you" paragraph={paragraphs[0]}/>
      <Section backgroundID="bg-image1" header="Amazing you" paragraph={paragraphs[0]}/>
      <Zoom bottom cascade>
        <button className='button-landing-page' onClick={()=>navigate("/screen2")}>Tiếp nè</button>
      </Zoom>
    </div>
  )
}

export default LandingPage