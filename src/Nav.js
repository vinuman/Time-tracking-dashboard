import profile from "./image-jeremy.png";
import { useState } from "react";

const Nav = () => {
  const [selectedTimeFrame, setSelectedTimeFrame] = useState("daily");
  const handleButtonClick = (timeFrame) => {
    setSelectedTimeFrame(timeFrame);
  };

  return (
    <nav>
      <div className="profile">
        <img src={profile}></img>
        <p>Report for</p>
        <h1>Jeremy Robson</h1>
      </div>
      <div className="time-frame">
        <ul>
          <li onClick={() => handleButtonClick("daily")}>Daily</li>
          <li onClick={() => handleButtonClick("weekly")}>Weekly</li>
          <li onClick={() => handleButtonClick("monthly")}>Monthly</li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
