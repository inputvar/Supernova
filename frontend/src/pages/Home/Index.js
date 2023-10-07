import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [value, setValue] = useState();

  const navigate = useNavigate();

  const handleJoinRoom = useCallback(() => {
    navigate(`/connect/room/${value}`);
  }, [navigate, value]);

  return (
    <div className="meetDeet">
      <input
      className="meetCode"
        value={value}
        onChange={e => setValue(e.target.value)}
        type="text"
        placeholder="Enter Room Code"
      />
      <button className="btn btn-outline-dark btn-lg meetBtn" onClick={handleJoinRoom}>Join</button>
    </div>
  );
};

export default HomePage;
