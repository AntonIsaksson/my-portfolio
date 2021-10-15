import "./portfoliocategory.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faYoutube,
  faCss3Alt,
  faHtml5,
  faJsSquare,
  faWix,
} from "@fortawesome/free-brands-svg-icons";

const PortfolioCard = () => {
  const data = [
    {
      id: 1,
      category: "Designs",
      projects: [
        {
          projectName: "Halloween Memory",
          img: "assets/img/halloweenMemory.gif",
          description:
            "Lorem haspd awnfa asass asdsdasdasd as asf asassd asdasd.",
          icon: <FontAwesomeIcon className='m-2' icon={faCss3Alt} />,
          icon2: <FontAwesomeIcon className='m-2' icon={faHtml5} />,
          icon3: <FontAwesomeIcon className='m-2' icon={faJsSquare} />,
        },
        {
          projectName: "Slow Down Resort",
          img: "assets/img/slowDown.gif",
          description:
            "Lorem haspd awnfa asass asdsdasdasd as asf asassd asdasd.",
          icon: "",
          icon2: <FontAwesomeIcon className='m-2' icon={faWix} />,
          websiteName: 'www.slowdownlanta.se',
          url: 'https://www.slowdownlanta.se/',
        },
        {
          projectName: "Lilla Svenska Skolan",
          img: "assets/img/svenskaSkolan.png",
          description:
            "Lorem haspd awnfa asass asdsdasdasd as asf asassd asdasd.",
          icon: '',
          icon2: <FontAwesomeIcon className='m-2' icon={faWix} />,
          websiteName: 'www.svenskaskolanlanta.se',
          url: 'http://www.svenskaskolanlanta.se/',
        },
      ],
    },

    {
      id: 2,
      category: "React Projects",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      projects: [
        {
          projectName: "React Project 1",
          img: "",
          description:
            "Lorem haspd awnfa asass asdsdasdasd as asf asassd asdasd.",
          icon: "",
        },
        {
          projectName: "React Project 2",
          img: "",
          description:
            "Lorem haspd awnfa asass asdsdasdasd as asf asassd asdasd.",
          icon: "",
        },
      ],
    },
    {
      id: 3,
      category: "Python",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      projects: [
        {
          projectName: "Python Project 1",
          img: "",
          description:
            "Lorem haspd awnfa asass asdsdasdasd as asf asassd asdasd.",
          icon: "",
        },
        {
          projectName: "Python Project 2",
          img: "",
          description:
            "Lorem haspd awnfa asass asdsdasdasd as asf asassd asdasd.",
          icon: "",
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
              <div className="col-4 first">
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
                    
                    

                    <div className="row">
                      <div className="col-4 align-self-center iconContainer mt-5">
                        <div className="card-img-bottom icon2 text-center">
                          {project.icon}
                        </div>
                      </div>
                      <div className="col-4 align-self-center mt-5 iconContainer">
                      <div className="card-img-bottom icon2 text-center">
                          {project.icon2}
                        </div>
                      </div>
                      <div className="col-4 align-self-center mt-5 iconContainer">
                      <div className="card-img-bottom icon2 text-center">
                          {project.icon3}
                        </div>
                      </div>
                    </div>
                    <a href={project.url} target='_blank'>{project.websiteName}</a>
                  </div>
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
