import React from 'react'
import ChatBox from '../components/LandingPage/ChatBox'
import Section from '../components/LandingPage/Section'

const LandingPage = () => {
  const paragraphs = [
    "Funny, smart, silly, cute, pretty and fantastic. Animesh, You truly are a girl who is beautiful inside out. On your birthday today, I just want you to know how lucky I am to have you in my life, happy birthday to you!"
  ]

  return (
    <div className='hint-container'>
      <ChatBox/>
      <Section backgroundID="bg-image1" header="Amazing you" paragraph={paragraphs[0]}/>
      <Section backgroundID="bg-image1" header="Amazing you" paragraph={paragraphs[0]}/>
    </div>
  )
}

export default LandingPage