import "bootstrap/dist/css/bootstrap.min.css";
import "./resume.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Resume = () => {
  const data = [
    {
      year: "2017",
      happening: "Slow Down Resort - Web Designer",
      desc: "Where it all started. I had been working full-/part time att Slow Down since I graduated High School in 2013, but in 2017 I got the offer to create a new website for the resort. With no experience of programming or web development, I used wix.com to create the site:",
      link: <a href='https://www.slowdownlanta.se/'>www.slowdownlanta.se</a>
    },
    {
      year: "2010",
      happening: "Born",
      desc: "Where it all started. I had been working full-/part time att Slow Down since I graduated High School in 2013, but in 2017 I got the offer to create a new website for the resort. With no experience of programming or web development, I used wix.com to create the site:",
      link: ''
    },
    {
      year: "2012",
      happening: "Born",
      desc: "The year I was born, super fascinating stuff happening right here!",
      link: ''
    },
    {
      year: "2014",
      happening: "Born",
      desc: "The year I was born, super fascinating stuff happening right here!",
      link: ''
    },
    {
      year: "2018",
      happening: "Born",
      desc: "The year I was born, super fascinating stuff happening right here!",
      link: ''
    },
  ];

  return (
    <div className="container-fluid resume" id="resume">
      <h1 className="subHeader2">
        <span className="subHeaderSpan2">Resumé</span>
      </h1>

      <div className="row">
        <div className="col-12 timelineContainer">
          <div className="timeline-steps">
            {data.map((d) => (
              <div className="timeline-step">
                <div className="timeline-content">
                  <div className="inner-circle"></div>
                  <p className="h6 mb-1 year">
                    <hr /> {d.year}{" "}
                  </p>
                  <p className="h7 happening">{d.happening}</p>
                  <p className="mb-0 mb-lg-0 description">{d.desc}</p>
                  {d.link}
                </div>
              </div>
            ))}
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
