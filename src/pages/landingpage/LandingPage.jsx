import "./landingpage.scss";

const LandingPage = () => {
  return (
    <div className="landingPage" id="landingPage">
      <div className="imageWrap">
        <div className="bgimage-home"></div>
      </div>

      <div className='header'>
        <div className='letterContainer'>
        <h1>Hi There, 
        <span className='mni'> my name is</span><br /> 
        <span className='l1'> A</span>
        <span className='l1'>n</span>
        <span className='l1'>t</span>
        <span className='l1'>o</span>
        <span className='l1'>n </span> 
        Isaksson! </h1>
        </div>
      </div>
      <div className="header2">
        <h1>Front End <br />Developer</h1>
      </div>

      {/* -------My Image------ */}
      <div className="profileImg">
        <div className="imgContainer">
          <img src="assets/img/me_blue.png" alt="me" />
        </div>
      </div>
      {/* ------My Image End----- */}
      {/* -------My Image------ */}
      <div className="welcomeBubble">
        <div className="welcomeContainer">
          <h1>Welcome to my developers Sea!</h1>
        </div>
      </div>
      {/* ------My Image End----- */}
    </div>
  );
};

export default LandingPage;
