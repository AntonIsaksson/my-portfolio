import "./skills.scss";
import ProgressBar from "../../components/progressbar/ProgressBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  return (
    <div className="skills container-fluid" id="skills">
      
        <h1 className='subHeader'><span className='subHeaderSpan'>Skills and Progress</span></h1>
      

      <ProgressBar />

      <a href='#contact' className="arrowLink">
            <FontAwesomeIcon className="arrowIcon" icon={faChevronDown} />
      </a>
    </div>
  );
};

export default Skills;
