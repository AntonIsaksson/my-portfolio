import "./skills.scss";
import ProgressBar from "../../components/progressbar/ProgressBar";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <div className="container">
        <h1 className='subHeading'><span className='subHeadingSpan'> Skills and Progress</span></h1>
      </div>

      <ProgressBar />
    </div>
  );
};

export default Skills;
