import "./portfoliocard.scss";

const PortfolioCard = () => {


const data = [
    
    [
        {
            category: 'Design',
            projectName: 'first design project'
        },
        {
            category: 'Design',
            projectName: 'first design project'
        }
    ], 
    [
        {
            category: 'Design',
            projectName: 'first design project'
        }
    ]
    
]

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
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
  );
};

export default PortfolioCard;
