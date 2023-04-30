import work from "./icon-work.svg";
import datajson from "./data.json";

const Work = ({ selectedTimeFrame }) => {
  return (
    <div className="box">
      <div className="image-container">
        <img src={work}></img>
      </div>
      <div className="container">
        <h1>{datajson[0].title}</h1>
        {selectedTimeFrame == "daily" ? (
          <h2>{datajson[0].timeframes.daily.current}hrs</h2>
        ) : selectedTimeFrame == "weekly" ? (
          <h2>{datajson[0].timeframes.weekly.current}hrs</h2>
        ) : selectedTimeFrame == "monthly" ? (
          <h2>{datajson[0].timeframes.monthly.current}hrs</h2>
        ) : (
          <h2>No data</h2>
        )}

        {selectedTimeFrame == "daily" ? (
          <h3>Last Week - {datajson[0].timeframes.daily.previous}hrs</h3>
        ) : selectedTimeFrame == "weekly" ? (
          <h3>Last Week - {datajson[0].timeframes.weekly.previous}hrs</h3>
        ) : selectedTimeFrame == "monthly" ? (
          <h3>Last Week - {datajson[0].timeframes.monthly.previous}hrs</h3>
        ) : (
          <h2>No data</h2>
        )}
      </div>
    </div>
  );
};

export default Work;
