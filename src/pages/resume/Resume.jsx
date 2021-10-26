import "bootstrap/dist/css/bootstrap.min.css";
import "./resume.scss";
import data from './data/resumeData.json';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Resume = () => {

  return (
    <div className="container-fluid resume" id="resume">
      <h1 className="subHeader2">
        <span className="subHeaderSpan2">Resumé</span>
      </h1>

      <div className="row">
        <div className="col-12 timelineContainer">
          <div className="timeline-steps">
          { data.map( d => {
            return (
              <div className="timeline-step" key={d.id}>
                <div className="timeline-content">
                  <div className="inner-circle"></div>
                  <p className="h6 mb-1 year">
                    <hr /> {d.year}{" "}
                  </p>
                  <p className="h7 happening">{d.happening}</p>
                  <p className="mb-0 mb-lg-0 description">{d.desc}</p>
                  <a href={d.link}>{d.link}</a>  
                </div>
              </div>
            )
          }) }
          
          </div>
        </div>
      </div>
      <a href='#skills' className="arrowLink">
            <FontAwesomeIcon className="arrowIcon" icon={faChevronDown} />
      </a>
    </div>
  );
};

export default Resume;
