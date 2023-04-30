import { useState, useEffect } from "react";
import datajson from "./data.json";
import Work from "./icon-work.svg";

const Main = ({ selectedTimeFrame }) => {
  const [data, setData] = useState([]);
  const [jsonData, setJsonData] = useState(data);

  useEffect(() => {
    setData(datajson);
  }, []);

  return (
    <main>
      <div className="box">
        <div className="image-container">
          <img src={Work}></img>
        </div>
        <div className="container">
          <h1>{selectedTimeFrame}</h1>
        </div>
      </div>
    </main>
  );
};

export default Main;
