import React, { useState } from "react";
import AuthService from "../../services/Auth.service";

import "./styles.css";

function MessageList(props: any) {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const [messages, setMessages] = useState<Array<any>>();

  React.useLayoutEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  });

  return (
    <div className="message-list-container card" ref={containerRef}>
      {messages?.map((x) => (
        <Message
          key={x._id}
          message={x}
          isOwnMessage={x.sender_user_id === AuthService.user?._id}
        />
      ))}
    </div>
  );
}

function Message(props: any) {
  const { sender_name, text } = props.message;
  return (
    <li className={`message card ${props.isOwnMessage && "own-message"}`}>
      <h4 className="sender">{props.isOwnMessage ? "You" : sender_name}</h4>
      <div>{text}</div>
    </li>
  );
}

export { MessageList };
