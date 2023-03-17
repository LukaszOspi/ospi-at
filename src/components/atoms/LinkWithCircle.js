import React from "react";
import MyVibratingCircle from "./MyVibratingCircle";
import "./../styles.css";

function LinkWithCircle(props) {
  const buttonStyle = {
    backgroundImage: `url(${props.image})`,
    backgroundSize: "cover",
  };

  return (
    <div className="landing-page">
      <MyVibratingCircle />
      <div className="center-button">
        <a href={props.url} target="_blank" rel="noopener noreferrer">
          <button className="center-button" style={buttonStyle}></button>
        </a>
      </div>
    </div>
  );
}

export default LinkWithCircle;
