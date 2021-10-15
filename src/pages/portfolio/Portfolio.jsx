import "./portfolio.scss";
import { useState } from "react";
import PortfolioCategory from "../../components/portfolioCategory/PortfolioCategory";



const Portfolio = (data) => {
  const [slide, setSlide] = useState(1);

  const handleClick = (way) => {
    way === "left"
      ? setSlide(slide > 0 ? slide - 1 : 2)
      : setSlide(slide < data.length - 1 ? slide + 1 : 0);
  };

  return (
    <div className="portfolio" id="portfolio">
      <div
        className="slider"
        style={{ transform: `translateX(-${slide * 100}vw)` }}
      >
        <PortfolioCategory />
      </div>

      <img
        src="assets/img/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/img/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick("")}
      />
    </div>
  );
};

export default Portfolio;
