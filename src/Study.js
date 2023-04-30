import study from "./icon-study.svg";
import datajson from "./data.json";

const Study = ({ selectedTimeFrame }) => {
  return (
    <div className="box">
      <div className="image-container" style={{ backgroundColor: "#FF5E7D" }}>
        <img src={study}></img>
      </div>
      <div className="container">
        <h1>{datajson[2].title}</h1>
        {selectedTimeFrame == "daily" ? (
          <h2>{datajson[2].timeframes.daily.current}hrs</h2>
        ) : selectedTimeFrame == "weekly" ? (
          <h2>{datajson[2].timeframes.weekly.current}hrs</h2>
        ) : selectedTimeFrame == "monthly" ? (
          <h2>{datajson[2].timeframes.monthly.current}hrs</h2>
        ) : (
          <h2>No data</h2>
        )}

        {selectedTimeFrame == "daily" ? (
          <h3>Last Week - {datajson[2].timeframes.daily.previous}hrs</h3>
        ) : selectedTimeFrame == "weekly" ? (
          <h3>Last Week - {datajson[2].timeframes.weekly.previous}hrs</h3>
        ) : selectedTimeFrame == "monthly" ? (
          <h3>Last Week - {datajson[2].timeframes.monthly.previous}hrs</h3>
        ) : (
          <h2>No data</h2>
        )}
      </div>
    </div>
  );
};

export default Study;
