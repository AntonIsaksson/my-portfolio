import "bootstrap/dist/css/bootstrap.min.css";
import "./resume.scss";

const Resume = () => {
  return (
    <div className="resume container-fluid" id="resume">
      <div className="row brownBg">
        
        <div className="col-md-6 col-6 col-sm-12 mb-5">
          <div className="container-fluid blue-bg">
            <div className="timeline">
              <h2 class="timeline__item timeline__item--year">1994</h2>

              <div class="timeline__item">
                <h3 class="timeline__title">Born</h3>
              </div>

              <h2 class="timeline__item timeline__item--year">2003</h2>

              <div class="timeline__item">
                <h3 class="timeline__title">Graduated High School</h3>
              </div>

              <h2 class="timeline__item timeline__item--year">2004</h2>

              <div class="timeline__item">
                <h3 class="timeline__title">
                  Started at Fox Valley Technical College (FVTC) in an
                  Electrical Engineering program
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-6 col-sm-12 mb-5">
          <div className="container-fluid blue-bg">
            <div className="timeline">
              <h2 class="timeline__item timeline__item--year">1985</h2>

              <div class="timeline__item">
                <h3 class="timeline__title">Born</h3>
              </div>

              <h2 class="timeline__item timeline__item--year">2003</h2>

              <div class="timeline__item">
                <h3 class="timeline__title">Graduated High School</h3>
              </div>

              <h2 class="timeline__item timeline__item--year">2004</h2>

              <div class="timeline__item">
                <h3 class="timeline__title">
                  Started at Fox Valley Technical College (FVTC) in an
                  Electrical Engineering program
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
