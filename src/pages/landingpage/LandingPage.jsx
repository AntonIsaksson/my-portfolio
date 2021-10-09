import "./landingpage.scss";

const LandingPage = () => {
  return (
    <div className="landingPage" id="landingPage">
      
      <div className="imageWrap"><div className="bgimage-home"></div></div>
        
      

        
        {/* -------My Image------ */}
        <div className="profileImg">
          <div className="imgContainer">
            <img src="assets/img/me_2.png" alt="me" />
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
