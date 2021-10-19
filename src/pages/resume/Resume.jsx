import "bootstrap/dist/css/bootstrap.min.css";
import "./resume.scss";

<link
  href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css"
  rel="stylesheet"
  id="bootstrap-css"
/>;

const Resume = () => {
  return (
    <div className="container-fluid resume" id="resume">
      <h1 className="subHeader2">
        <span className="subHeaderSpan2">Resume</span>
      </h1>

      <div className="row justify-content-center">
        <div className="col-5 timelineBox">
          <div>
            <h2>Work Experience</h2>
          </div>

          <div className="crockedContainer">
            <div className="line1" />
            <div className="line2" />
            <div className="line3" />
            <div className="line4" />
            <div className="line5" />
          </div>
    
          <div className="yearContainer">
            <div className="yearBox">
              <div className="container textContainer">
                <h5 className="text-center">1994</h5>
              </div>
            </div>
            <div className="happeningContainer">
              <h3> - Graduation...</h3>
            </div>
          </div>

          <div className="yearContainer2">
            <div className="yearBox2">
              <div className="container textContainer">
                <h5 className="text-center">1994</h5>
              </div>
            </div>
            <div className="happeningContainer2">
              <h3> - Graduation...</h3>
            </div>
          </div>

        </div>

        <div className="col-5 timelineBox">
          <div>
            <h2>School</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
