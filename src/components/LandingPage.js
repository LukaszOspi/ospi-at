import React from "react";
import LinkWithCircle from "./atoms/LinkWithCircle";
import linkedinImage from "./../assets/linkedin.png";
import githubImage from "./../assets/github.png";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <LinkWithCircle
        url="https://www.linkedin.com/in/lukasz-osipiak-280585209/"
        image={linkedinImage}
      />{" "}
      <LinkWithCircle url="https://github.com/lukaszospi" image={githubImage} />{" "}
    </div>
  );
};

export default LandingPage;
