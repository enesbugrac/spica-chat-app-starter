import { Link } from "react-router-dom";
import { MessageInput } from "../MessageInput";
import { MessageList } from "../MessageList";
import { useState } from "react";

import "./styles.css";

function ChatRoom() {
  const [room, setRoom] = useState<{ room_title: string; _id: string }>();

  return (
    <div className="page flex-column w-100">
      <div className="page-header flex-row-center gp-1">
        <Link to="/landing">⬅️ </Link> <h2> {room?.room_title}</h2>
      </div>
      <div className="messages-container mt-3">
        <MessageList roomId={room?._id} />
        <MessageInput roomId={room?._id} />
      </div>
    </div>
  );
}

export { ChatRoom };
