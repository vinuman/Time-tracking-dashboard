import profile from "./image-jeremy.png";

const Nav = () => {
  return (
    <nav>
      <div className="profile">
        <img src={profile}></img>
        <p>Report for</p>
        <h1>Jeremy Robson</h1>
      </div>
      <div className="time-frame">
        <ul>
          <li>Daily</li>
          <li>Weekly</li>
          <li>Monthly</li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
