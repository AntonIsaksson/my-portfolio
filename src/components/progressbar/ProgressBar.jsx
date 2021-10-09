import "./progressbar.scss";
import { CodeSquare, Braces } from 'react-bootstrap-icons';

const ProgressBar = () => {
  const data = [
    {
      id: 1,
      title: "HTML",
      percentage: '50%',
      icon: <CodeSquare />,
    },
    {
      id: 2,
      title: "Css/Sass",
      percentage: "65%",
      icon: <Braces />
    },
    {
      id: 3,
      title: "JS",
      percentage: "40%",
      icon: <Braces />
    },
    {
      id: 4,
      title: "React",
      percentage: "60%",
      icon: <Braces />
    },
    {
      id: 5,
      title: "Python",
      percentage: "40%",
      icon: <Braces />
    },
    {
        id: 6,
        title: "Django",
        percentage: "65%",
        icon: <Braces />
      },
  ];

  return (
    <div className="pbContainer">
      <div className="row justify-content-center">
      
        {data.map((d) => (
          
          <div class="progress">
            <div className='icon'>
              {d.icon}
            </div>
            
            <div class="progress-value" style={{width: d.percentage}}>
              <h4>{d.title}</h4>
            </div>
          </div>

          /*
        <div class="box col-4">
          <div class="percent">
            <svg>
              <circle cx="70" cy="70" r="70"></circle>
              <circle cx="70" cy="70" r="70"></circle>
            </svg>
            <div class="num">
              <h2>
                {d.percentage}<span>%</span>
              </h2>
            </div>
          </div>
          <h2 class="text">{d.title}</h2>
        </div>*/
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
