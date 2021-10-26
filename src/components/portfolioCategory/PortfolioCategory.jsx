import "./portfoliocategory.scss";
import Data from "./data/portfolioData.json";

/* import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3Alt,
  faHtml5,
  faJsSquare,
  faWix,
} from "@fortawesome/free-brands-svg-icons";*/

const PortfolioCard = () => {


  return (
    <>
      {Data.map((d) => {
        return (
          <div className="container-fluid portfolioItemContainer" key={d.id}>
            <h1 className="subHeader">
              <span className="subHeaderSpan">{d.category}</span>{" "}
            </h1>
            <div className="item row">

              {d.projects.map((project) => (
                <div className="col-6 col-md-4 first" key={project.id}>
                  <div className="card">
                    <div
                      className="imgContainerCard"
                      style={{
                        backgroundImage: `url(${project.img})`
                      }}
                    ></div>

                    <div className="card-body">
                      <h5 className="card-title text-center ">
                        {project.projectName}
                      </h5>
                      <p className="card-text">{project.description}</p>

                      <div className="row align-items-center">                       
                        {project.icons.map((ic) => (
                          <div className="col-4 align-items-center iconContainer">
                            <div className="card-img-bottom icon2 text-center">
                              {/*<FontAwesomeIcon icon={['fab', `${ic.icon}`]} className='mt-2'/>*/}
                            </div>
                          </div>
                        ))}
                      </div>

                    </div>
                    <a href={project.url} target="_blank" rel="noreferrer">
                      {project.websiteName}
                    </a>
                  </div>
                </div>
              ))}

            </div>
          </div>
        );
      })}

      {/*{data.map((d) => (
        <div className="container-fluid portfolioItemContainer">
          <h1 className="subHeader">
            <span className="subHeaderSpan">{d.category}</span>{" "}
          </h1>
          <div className="item row">
            {d.projects.map((project) => (
              <div className="col-6 col-md-4 first">
                <div className="card">
                  <div
                    className="imgContainerCard"
                    style={{
                      backgroundImage: `url(${project.img})`,
                    }}
                  ></div>

                  <div className="card-body">
                    <h5 className="card-title text-center ">
                      {project.projectName}
                    </h5>
                    <p className="card-text">{project.description}</p>

                    <div className="row align-items-center">
                      {project.icons.map((i) => (
                        <div className="col-4 align-items-center iconContainer">
                          <div className="card-img-bottom icon2 text-center">
                            {i.icon}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                  </div>
                  <a href={project.url} target="_blank" rel='noreferrer'>
                      {project.websiteName}
                    </a>
                </div>
              </div>
            ))}
          </div>
        </div>
                      ))}*/}
    </>
  );
};

export default PortfolioCard;
