import React from 'react'
import { LightSpeed } from 'react-reveal'

const Section = (props) => {    
  const {header, paragraphs, backgroundID} = props

  return (
    <div id={backgroundID} className='hintSection'>
      <LightSpeed left>  
        <h2 className='pageHeader'>{header}</h2>
      </LightSpeed>

      {paragraphs.map((paragraph, index) =>  
        <LightSpeed key={index} right> 
          <p className='hintP'>{paragraph}<br/></p>
        </LightSpeed>
      )}
      
    </div>
  )
}

export default Section