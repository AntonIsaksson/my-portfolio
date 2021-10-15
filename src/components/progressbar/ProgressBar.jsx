import "./progressbar.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3Alt,
  faHtml5,
  faJsSquare,
  faReact,
  faPython,
  faWix,
  faWordpress,

} from "@fortawesome/free-brands-svg-icons";

const ProgressBar = () => {
  const data = [
    {
      id: 1,
      title: "HTML",
      percentage: "50%",
      icon: <FontAwesomeIcon icon={faHtml5} />,
    },
    {
      id: 2,
      title: "Css/Sass",
      percentage: "65%",
      icon: <FontAwesomeIcon icon={faCss3Alt} />,
    },
    {
      id: 3,
      title: "JS",
      percentage: "40%",
      icon: <FontAwesomeIcon icon={faJsSquare} />,
    },
    {
      id: 4,
      title: "React",
      percentage: "60%",
      icon: <FontAwesomeIcon icon={faReact} />,
    },
    {
      id: 5,
      title: "Python",
      percentage: "40%",
      icon: <FontAwesomeIcon icon={faPython} />,
    },
    {
      id: 6,
      title: "Django",
      percentage: "65%",
      icon: <FontAwesomeIcon icon={faPython} />,
    },
    {
      id: 7,
      title: "Wix",
      percentage: "80%",
      icon: <FontAwesomeIcon icon={faWix} />,
    },
    {
      id: 8,
      title: "Wordpress",
      percentage: "35%",
      icon: <FontAwesomeIcon icon={faWordpress} />
    },
  ];

  return (
    <div className="pbContainer">
      <div className="row justify-content-center">
        {data.map((d) => (
          <div class="progress">
            <div className="icon">{d.icon}</div>

            <div class="progress-value" style={{ width: d.percentage }}>
              <h4>{d.title}</h4>
            </div>
            <h6 className="text-center m-2 percentage">{d.percentage}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
