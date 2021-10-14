import "./portfoliocategory.scss";

const PortfolioCard = () => {
  const data = [
    {
      id: 1,
      category: "Designs",
      projects: [
        {
          projectName: "Halloween Memory",
          img: "/static/media/halloweenMemory.480d5b6a.gif",
          description:
            "Lorem haspd awnfa asass asdsdasdasd as asf asassd asdasd.",
          icon: "assets/img/js.png",
        },
        {
          projectName: "Slow Down Resort",
          img: "/static/media/slowDown.75d922d2.gif",
          description:
            "Lorem haspd awnfa asass asdsdasdasd as asf asassd asdasd.",
          icon: "",
        },
        {
          projectName: "Lilla Svenska Skolan",
          img: "assets/img/svenskaSkolan.png",
          description:
            "Lorem haspd awnfa asass asdsdasdasd as asf asassd asdasd.",
          icon: "",
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
          <h1 className='subHeading'><span className='subHeadingSpan'>{d.category}</span> </h1>
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
                    
                      <img src={project.icon} alt="" className='card-img-bottom icon2 img-fluid'/>
                    
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
