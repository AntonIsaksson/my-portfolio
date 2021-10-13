import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./contact.scss";

const Contact = () => {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };

  return (
    <div className="contact container-fluid" id="contact">
      <div className="row align-items-center">
        <div className="col left">
          <img src="assets/img/shake.svg" alt="" />
        </div>

        <div className="col right">
          {/* 
          <h2>Contact</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <button type="submit">Send</button>
            {message && <span>Thanks, I'll reply ASAP!</span>}
          </form>*/}
          <div className="container-fluid form-container">
            <div className="row">
              <div className="col text-center">
                <div className="well well-sm">
                  <form action="" method="post">
                    <fieldset>
                      <legend className="text-center">Contact Me</legend>

                      <div className="form-group">
                        <div className="col-md-9">
                          <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Your name"
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="form-group">
                        <div className="col-md-9">
                          <input
                            id="email"
                            name="email"
                            type="text"
                            placeholder="Your email"
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="form-group">
                        
                        <div className="col-md-9">
                          <textarea
                            className="form-control"
                            id="message"
                            name="message"
                            placeholder="Please enter your message here..."
                            rows="5"
                          ></textarea>
                        </div>
                      </div>

                      <div className="form-group">
                        <div className="col-md-12 text-right">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    /*<div classNameName="contact" id="contact">
      <div classNameName="left">
        <img src="assets/img/shake.svg" alt="" />
      </div>

      <div classNameName="right">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP!</span>}
        </form>
      </div>
    </div>*/
  );
};

export default Contact;
