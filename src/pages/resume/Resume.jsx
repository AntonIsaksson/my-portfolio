import "bootstrap/dist/css/bootstrap.min.css";
import "./resume.scss";



const Resume = () => {
  return (
    <div className="container-fluid resume" id="resume">
      <h1 className="subHeader2">
        <span className="subHeaderSpan2">Resume</span>
      </h1>
      <div className="row justify-content-center">
        <div className="col-5 lineContainer">
          <div className="divider line glow">
            <h2>Work Experience</h2>
          </div>
        </div>

        <div className="col-5 lineContainer">
          <div className="divider line glow">
            <h2>
              School
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
