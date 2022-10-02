import React from 'react'

const MessageGroup = (props) => {
  const {type, messageList} = props

  return (
    messageList !== null && messageList.length > 0 && 
    <div className={`message-group-${type}`}>
      <div>
        <img src="https://api.adorable.io/avatars/100/webdeveducation.png" alt='avatar' />
      </div>
      <div>
        {messageList.map(((message, index)=>(
          <div className={`message-${type}`} key={index}>
            <div className={`message-${type}-text`}>
              {message}
            </div>
          </div>
        )))}
      </div>
    </div>
  )
}

export default MessageGroup