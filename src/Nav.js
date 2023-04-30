import profile from "./image-jeremy.png";
import { useState } from "react";

const Nav = ({
  selectedTimeFrame,
  setSelectedTimeFrame,
  handleButtonClick,
  selectedButton,
  setselectedButton,
}) => {
  return (
    <nav>
      <div className="profile">
        <img src={profile}></img>
        <div className="profile-name">
          <p>Report for</p>
          <h1>Jeremy Robson</h1>
        </div>
      </div>
      <div className="time-frame">
        <ul>
          <li
            className={selectedButton == "daily" ? "selected" : ""}
            onClick={() => handleButtonClick("daily")}
          >
            Daily
          </li>
          <li
            className={selectedButton == "weekly" ? "selected" : ""}
            onClick={() => handleButtonClick("weekly")}
          >
            Weekly
          </li>
          <li
            className={selectedButton == "monthly" ? "selected" : ""}
            onClick={() => handleButtonClick("monthly")}
          >
            Monthly
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
