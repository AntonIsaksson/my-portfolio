import "./skills.scss";
import ProgressBar from "../../components/progressbar/ProgressBar";



const Skills = () => {
  return (
    <div className="skills container-fluid" id="skills">
      
        <h1 className='subHeader'><span className='subHeaderSpan'>Skills and Progress</span></h1>
      

      <ProgressBar />
    </div>
  );
};

export default Skills;
