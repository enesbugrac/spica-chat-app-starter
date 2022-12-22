import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import AuthService from "../../services/Auth.service";
import "./styles.css";

function Landing() {
  const [chatRooms, setchatRooms] = useState<Array<any>>([]);
  const [newRoom, setNewRoom] = useState<string>();
  const navigate = useNavigate();

  const handleCreateNewRoom = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
  };
  return (
    <div className="page">
      <div className="flex-row-between page-header">
        <h2>Choose a Chat Room</h2>
        <button
          onClick={() => {
            localStorage.removeItem("userJWT");
            AuthService.auth();
            navigate("/");
          }}
        >
          Log Out
        </button>
      </div>

      <div className="flex-row-center gp-2 mt-3">
        <input
          value={newRoom}
          placeholder="Enter New Room Title..."
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewRoom(e.target.value)
          }
        />
        <button onClick={handleCreateNewRoom}>Create New Room</button>
      </div>

      <ul className="chat-room-list card">
        {chatRooms?.map((room) => (
          <Link className="card" to={`/room/${room._id}`}>
            <li key={room._id}>{room.room_title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export { Landing };
