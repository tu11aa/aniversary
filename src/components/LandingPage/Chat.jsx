import React from 'react'

const styles = {
  header: {
    color: "white",
    fontFamily: "'Great Vibes', cursive",
    letterSpacing: "2px",
    fontSize: "2rem",
  }
}

const Chat = () => {
  return (
    <>
      <h2 style={styles.header}>First  night  chats</h2>
      <div className="messages-container">
        <div class="message-group-received">
          <div>
            <img src="https://api.adorable.io/avatars/100/webdeveducation.png" />
          </div>
          <div>
            <div class="message-received">
              <div class="message-received-text">
                Hey man! How's it going?
              </div>
            </div>
            <div class="message-received">
              <div class="message-received-text">
                Hey man! How's it going?
              </div>
            </div>
            <div class="message-received">
              <div class="message-received-text">
                Hey man! How's it going?
              </div>
            </div>
          </div>
        </div>
        <div class="message-group-sent">
          <div class="message-sent">
            <div class="message-sent-text">
              Hey man! How's it going?
            </div>
            <div class="message-sent-status"></div>
          </div>
          <div class="message-sent">
            <div class="message-sent-text">
              Hey man! How's it going?
            </div>
            <div class="message-sent-status"></div>
          </div>
          <div class="message-sent">
            <div class="message-sent-text">
              Hey man! How's it going?
            </div>
            <div class="message-sent-status">
              <img
                src="https://api.adorable.io/avatars/100/webdeveducation.png"
              />
            </div>
          </div>
        </div>
        <div class="message-group-received">
          <div>
            <img src="https://api.adorable.io/avatars/100/webdeveducation.png" />
          </div>
          <div>
            <div class="message-received">
              <div class="message-received-text">
                Hey man! How's it going?
              </div>
            </div>
            <div class="message-received">
              <div class="message-received-text">
                Hey man! How's it going?
              </div>
            </div>
            <div class="message-received">
              <div class="message-received-text">
                Hey man! How's it going?
              </div>
            </div>
          </div>
        </div>
        <div class="message-group-sent">
          <div class="message-sent">
            <div class="message-sent-text">
              Hey man! How's it going?
            </div>
            <div class="message-sent-status"></div>
          </div>
          <div class="message-sent">
            <div class="message-sent-text">
              Hey man! How's it going?
            </div>
            <div class="message-sent-status">
              <i class="fas fa-check-circle"></i>
            </div>
          </div>
          <div class="message-sent">
            <div class="message-sent-text">
              Hey man! How's it going?
            </div>
            <div class="message-sent-status">
              <i class="far fa-check-circle"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Chat