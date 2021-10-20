import "bootstrap/dist/css/bootstrap.min.css";
import "./resume.scss";

const Resume = () => {
  const data = [
    {
      year: "1994",
      happening: "Born",
      desc: 'The year I was born, super fascinating stuff happening right here!'
    },
    {
      year: "2010",
      happening: "Born",
      desc: 'The year I was born, super fascinating stuff happening right here!'
    },
    {
      year: "2012",
      happening: "Born",
      desc: 'The year I was born, super fascinating stuff happening right here!'
    },
    {
      year: "2014",
      happening: "Born",
      desc: 'The year I was born, super fascinating stuff happening right here!'
    },
    {
      year: "2018",
      happening: "Born",
      desc: 'The year I was born, super fascinating stuff happening right here!'
    },
  ];

  return (
    <div className="container-fluid resume" id="resume">
      <h1 className="subHeader2">
        <span className="subHeaderSpan2">Resume</span>
      </h1>

      <div className="row">
        <div className="col-12 timelineContainer">
          <div className="timeline-steps">

            {data.map((d) => (
              <div className="timeline-step">
                <div className="timeline-content">
                  <div className="inner-circle"></div>
                  <p className="h6 mt-3 mb-1 year">{d.year} - {d.happening}</p>
                  
                  <p className="mb-0 mb-lg-0 description">{d.desc}</p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
