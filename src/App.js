import Nav from "./Nav";
import Main from "./Main";
import { useState } from "react";

function App() {
  const [selectedTimeFrame, setSelectedTimeFrame] = useState("daily");
  const [selectedButton, setSelectedButton] = useState("daily");
  const handleButtonClick = (timeframe) => {
    setSelectedTimeFrame(timeframe);
    setSelectedButton(timeframe);
  };
  return (
    <div className="App">
      <Nav
        selectedTimeFrame={selectedTimeFrame}
        setSelectedTimeFrame={setSelectedTimeFrame}
        handleButtonClick={handleButtonClick}
        selectedButton={selectedButton}
        setSelectedButton={setSelectedButton}
      />
      <Main selectedTimeFrame={selectedTimeFrame} />
    </div>
  );
}

export default App;
