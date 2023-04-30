import play from "./icon-play.svg";
import datajson from "./data.json";

const Play = ({ selectedTimeFrame }) => {
  return (
    <div className="box">
      <div className="image-container" style={{ backgroundColor: "#55C2E6" }}>
        <img src={play}></img>
      </div>
      <div className="container">
        <h1>{datajson[1].title}</h1>
        {selectedTimeFrame == "daily" ? (
          <h2>{datajson[1].timeframes.daily.current}hrs</h2>
        ) : selectedTimeFrame == "weekly" ? (
          <h2>{datajson[1].timeframes.weekly.current}hrs</h2>
        ) : selectedTimeFrame == "monthly" ? (
          <h2>{datajson[1].timeframes.monthly.current}hrs</h2>
        ) : (
          <h2>No data</h2>
        )}

        {selectedTimeFrame == "daily" ? (
          <h3>Last Week - {datajson[1].timeframes.daily.previous}hrs</h3>
        ) : selectedTimeFrame == "weekly" ? (
          <h3>Last Week - {datajson[1].timeframes.weekly.previous}hrs</h3>
        ) : selectedTimeFrame == "monthly" ? (
          <h3>Last Week - {datajson[1].timeframes.monthly.previous}hrs</h3>
        ) : (
          <h2>No data</h2>
        )}
      </div>
    </div>
  );
};

export default Play;
