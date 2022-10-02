import React from 'react'
import MessageGroup from './MessageGroup'

const styles = {
  header: {
    color: "white",
    fontFamily: "'Great Vibes', cursive",
    letterSpacing: "2px",
    fontSize: "2rem",
  }
}

const ChatBox = () => {
  const messagesList = [
    {
      type: "sent",
      messages: ["You waved at Ngân!"]
    },
    { 
      type: "received",
      messages: ["You and Ngân waved at each other!"]
    },
    {
      type: "sent",
      messages: ["Ngân có định học ở trung tân Light lâu dài hông dạ"]
    },
    { 
      type: "received",
      messages: ["Ngân chưa biết nữa", "Mà chắc học giờ tới tết trước đã", "Qua tết tính tiếp"]
    },
    {
      type: "sent",
      messages: ["Tại định nhờ Ngân chở qua thầy Đạt dùm á"]
    },
    { 
      type: "received",
      messages: ["À đc nha", "😂😂"]
    },
    {
      type: "sent",
      messages: ["Mơn Ngân nha hihi"]
    },
    { 
      type: "received",
      messages: ["Có gì đâu :3"]
    },
  ]

  return (
    <>
      <h2 style={styles.header}>First  chats</h2>
      <div className="messages-container">
        {messagesList.map((messages, index)=><MessageGroup key={index} type={messages.type} messageList={messages.messages}/>)}
      </div>
    </>
  )
}

export default ChatBox