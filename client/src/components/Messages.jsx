import React from "react";
import { useEffect } from "react";
import styles from "../css/Messages.module.css";

const Messages = ({ messages, name }) => {

  const refMassages = React.createRef();

  const scrollDown = (node) => {;
    let scroll_to_bottom = document.getElementsByClassName(node.className)[0];
		scroll_to_bottom.scrollTop = scroll_to_bottom.scrollHeight;
  }

  useEffect(() => {
    scrollDown(refMassages.current);
  }, [messages]);
  
  return (
    <div ref={refMassages} className={styles.messages}>
      {messages.map(({ user, message }, i) => {
        const itsMe = user.name.trim().toLowerCase() === name.trim().toLowerCase();
        const className = itsMe ? styles.me : styles.user;

        return (
          <div key={i} className={`${styles.message} ${className}`}>
            <span className={styles.user}>{user.name}</span>

            <div className={styles.text}>{message}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Messages;
