import React from 'react'
import { useEffect } from 'react'
import { LightSpeed } from 'react-reveal'

const Section = (props) => {
  const {header, paragraph} = props

  return (
    <div className='hintSection'>
      <LightSpeed left>  
        <h2 className='pageHeader'>{header}</h2>
      </LightSpeed>
      <LightSpeed right>  
        <p className='hintP'>{paragraph}</p>
      </LightSpeed>
    </div>
  )
}

export default Section