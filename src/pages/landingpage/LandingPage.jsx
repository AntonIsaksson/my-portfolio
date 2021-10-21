import "./landingpage.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const LandingPage = () => {
  return (
    <div className="landingPage" id="landingPage">
      <div className="imageWrap">
        <div className="bgimage-home"></div>
      </div>

      <div className="header">
        <div className="letterContainer">
          <h1>
            Hi There,
            <span className="mni"> my name is</span>
            <br />
            <span className="l1"> A</span>
            <span className="l1">n</span>
            <span className="l1">t</span>
            <span className="l1">o</span>
            <span className="l1">n </span>
            Isaksson!{" "}
          </h1>
        </div>
      </div>

      <div className="header2">
        
      </div>

      {/* -------My Image------ */}
      <div className="profileImg">
        <div className="imgContainer">
          <img src="assets/img/me_blue.png" alt="me" />
        </div>
      </div>
      {/* ------My Image End----- */}
      {/* -------Welcome Bubble------ */}
      {/*<div className="welcomeBubble">
        <div className="welcomeContainer">
          <h1>Welcome to my developers Sea!</h1>
        </div>
      </div>*/}
      {/* ------Welcome Bubble----- */}
      
      <a href='#portfolio' className="arrowLink">
            <FontAwesomeIcon className="arrowIcon" icon={faChevronDown} />
      </a>
    </div>
  );
};

export default LandingPage;
