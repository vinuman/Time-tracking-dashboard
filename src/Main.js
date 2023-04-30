import { useState, useEffect } from "react";

import Work from "./Work";
import Play from "./Play";
import Study from "./Study";
import Exercise from "./Exercise";
import Social from "./Social";
import Selfcare from "./Selfcare";

const Main = ({ selectedTimeFrame }) => {
  const [data, setData] = useState([]);

  /*   useEffect(() => {
    setData(datajson);
  }, []); */
  console.log(selectedTimeFrame);

  return (
    <div className="main">
      <Work selectedTimeFrame={selectedTimeFrame} />
      <Play selectedTimeFrame={selectedTimeFrame} />
      <Study selectedTimeFrame={selectedTimeFrame} />
      <Exercise selectedTimeFrame={selectedTimeFrame} />
      <Social selectedTimeFrame={selectedTimeFrame} />
      <Selfcare selectedTimeFrame={selectedTimeFrame} />
    </div>
  );
};

export default Main;
