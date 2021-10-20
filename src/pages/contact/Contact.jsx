import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./contact.scss";
import emailjs from "emailjs-com";
import{ init } from 'emailjs-com';
init("user_YnkXPlVwLYoYY1aere2EN");

const Contact = () => {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs
      .sendForm("outlook", "template_3z24149", e.target, "user_YnkXPlVwLYoYY1aere2EN")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset();
  };

  return (
    <div className="contact container-fluid" id="contact">
      <div className="row justify-content-evenly align-items-center">
        <div className="col-md-6 col-12 left">
          <img src="assets/img/handshake.png" alt="" />
        </div>

        <div className="col-md-4 col-12 right">
          <div className="container-fluid form-container">
            <div className="row">
              <div className="col text-center">
                <div className="well well-sm">
                  <form action="" method="post" onSubmit={handleSubmit}>
                    <fieldset className="container-fluid">
                      <legend className="subHeader2 text-center">
                        <span className="subHeaderSpan2">Contact Me</span>{" "}
                      </legend>
                      <div className="formGroupsContainer">
                        <div className="form-group">
                          <div className="col-md-9">
                            <input
                              id="name"
                              name="name"
                              type="text"
                              placeholder="Jon Snow"
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="form-group">
                          <div className="col-md-9 placeholder-glow">
                            <input
                              id="email"
                              name="email"
                              type="text"
                              placeholder="jonsnow@knowsnothing.com"
                              className="form-control "
                            />
                          </div>
                        </div>

                        <div className="form-group">
                          <div className="col-md-9">
                            <textarea
                              className="form-control"
                              id="message"
                              name="message"
                              placeholder="'Hi! I would like to know something...'"
                              rows="4"
                            ></textarea>
                          </div>
                        </div>

                        <div className="form-group">
                          <div className="col-md-12 text-right">
                            <button
                              type="submit"
                              className="btn btn-primary btn-lg"
                            >
                              Send!
                            </button>
                            <div className='col-12 messageContainer'>{message && <span>Thanks, I'll reply ASAP!</span>}</div>
                            
                          </div>
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
  );
};

export default Contact;
