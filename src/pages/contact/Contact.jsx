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
        
          <h2>Contact</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <button type="submit">Send</button>
            {message && <span>Thanks, I'll reply ASAP!</span>}
          </form>
        
        </div>

      </div>

    </div>

    /*<div className="contact" id="contact">
      <div className="left">
        <img src="assets/img/shake.svg" alt="" />
      </div>

      <div className="right">
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
