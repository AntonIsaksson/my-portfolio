import "./portfoliocategory.scss";


const PortfolioCard = () => {
  const data = [
    {
      id: 1,
      category: "Designs",
      projects: [
        {
          id: 1,
          projectName: 'Design pj 1',
          img: '',
          description: 'Lorem haspd awnfa asass asdsdasdasd as asf asassd asdasd.',
        },
      ]
        
    },
    
    {
      id: 2,
      category: "React Projects",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    },
    {
      id: 3,
      category: "Python",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    },
  ];

  return (
    <>
      {data.map((d) => (
        <div className="container-fluid portfolioItemContainer">
          <h1>{d.category}</h1>
          <div className="item row">
            <div className="col-4 first">



              <div className="card">
                <div className="card-body">
                
                  <h5 className="card-title">Title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                  
                </div>
              
               
                <div className="imgContainer mb-2 col-12 text-center">
                  <img
                    src="assets/img/mail2.png"
                    className="img-fluid card-img-bottom"
                    alt="..."
                  />
                </div>
              </div>



            </div>
          </div>
          </div>
      ))}
    </>
  );
};

export default PortfolioCard;
