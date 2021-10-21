import "./portfoliocategory.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3Alt,
  faHtml5,
  faJsSquare,
  faWix,
} from "@fortawesome/free-brands-svg-icons";

const PortfolioCard = () => {
  const data = [
    {
      id: 1,
      category: "CMS Websites",
      projects: [
        {
          projectName: "Slow Down Resort",
          img: "assets/img/slowDown.gif",
          description:
            "Lorem haspd awnfa asass asdsdasdasd as asf asassd asdasd.",
          icons: [
            {
              icon: <FontAwesomeIcon className="m-2" icon={faWix} />,
            },
          ],
          websiteName: "www.slowdownlanta.se",
          url: "https://www.slowdownlanta.se/",
        },
        {
          projectName: "Lilla Svenska Skolan",
          img: "assets/img/svenskaSkolan.png",
          description:
            "Lorem haspd awnfa asass asdsdasdasd as asf asassd asdasd.",
          icons: [
            {
              icon: <FontAwesomeIcon className="m-2" icon={faWix} />,
            },
          ],
          websiteName: "www.svenskaskolanlanta.se",
          url: "http://www.svenskaskolanlanta.se/",
        },
        {
          projectName: "Slow Down Beach",
          img: "assets/img/slowDownBeachvolley.gif",
          description:
            "Lorem haspd awnfa asass asdsdasdasd as asf asassd asdasd.",
          icons: [
            {
              icon: <FontAwesomeIcon className="m-2" icon={faWix} />,
            },
          ],
          websiteName: "www.slowdownbeachvolley.se",
          url: "https://www.slowdownbeachvolley.se/",
        },
      ],
    },

    {
      id: 2,
      category: "Front End",
      projects: [
        {
          projectName: "Halloween Memory",
          img: "assets/img/halloweenMemory.gif",
          description:
            "My first ever Javascript project! In 2019, about 3 months in to Code Academys Full Stack Program, the mission was to make an application using only HTML, CSS and JS(jQuery). This is the result!",
          icons: [
            {
              icon: <FontAwesomeIcon className="m-2" icon={faCss3Alt} />,
            },
            {
              icon: <FontAwesomeIcon className="m-2" icon={faHtml5} />,
            },
            {
              icon: <FontAwesomeIcon className="m-2" icon={faJsSquare} />,
            },
          ],
          websiteName: "GithubPages/mystery-memory",
          url: "https://antonisaksson.github.io/mystery-memory/",
        },
        {
          projectName: "React Project 2",
          img: "",
          description:
            "Lorem haspd awnfa asass asdsdasdasd as asf asassd asdasd.",
          icons: [
            {
              icon: <FontAwesomeIcon className="m-2" icon={faWix} />,
            },
          ],
        },
      ],
    },
    {
      id: 3,
      category: "Full Stack",
      projects: [
        {
          projectName: "Game Design 2d",
          img: "assets/img/gameDesign.gif",
          description:
            "Lorem haspd awnfa asass asdsdasdasd as asf asassd asdasd.",
          websiteName: "www.gamedesign-2d.com",
          url: "https://gamedesign-2d.herokuapp.com/",
          icons: [
            {
              icon: <FontAwesomeIcon className="m-2" icon={faCss3Alt} />,
            },
            {
              icon: <FontAwesomeIcon className="m-2" icon={faHtml5} />,
            },
            {
              icon: <FontAwesomeIcon className="m-2" icon={faJsSquare} />,
            },
          ],
        },
        {
          projectName: "Python Project 2",
          img: "",
          description:
            "Lorem haspd awnfa asass asdsdasdasd as asf asassd asdasd.",
          icons: [
            {
              icon: <FontAwesomeIcon className="m-2" icon={faWix} />,
            },
          ],
        },
      ],
    },
  ];

  return (
    <>
      {data.map((d) => (
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
      ))}
    </>
  );
};

export default PortfolioCard;
