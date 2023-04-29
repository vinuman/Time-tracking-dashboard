import { useState, useEffect } from "react";
import datajson from "./data.json";
import Work from "./icon-work.svg";

const Main = ({ selectedTimeFrame }) => {
  const [data, setData] = useState([]);
  const [jsonData, setJsonData] = useState(data);

  return (
    <main>
      {datajson.map((item) => (
        <div key={item.title} className="box">
          <div className="image-container">
            <img src={item.title}></img>
          </div>
        </div>
      ))}

      {datajson.map((item) => (
        <div key={item.title}>
          <h1>{item.title}</h1>
          <p>Daily: {item.timeframes.daily.current} hours</p>
          <p>Weekly: {item.timeframes.weekly.current} hours</p>
          <p>Monthly: {item.timeframes.monthly.current} hours</p>
        </div>
      ))}
    </main>
  );
};

export default Main;
