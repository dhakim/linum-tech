import React from "react";
import './ContactDetail.scss';
import TextField from "../TextField/TextField";
import TextArea from "../TextArea/TextArea";
import Button from "../Button/Button";

const ContactForm = () => {
  return (
    <React.Fragment>
      <form>
        <div className="form-row">
          <div className="item">
            <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
              <TextField 
                label="Name"
                type="text"
                name="name"
              />
            </div>

            <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
              <TextField 
                label="Email"
                type="email"
                name="email"
              />
            </div>

            <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
              <TextField 
                label="Phone"
                type="tel"
                name="phone"
              />
            </div>

            <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
              <TextArea 
                label="Message"
                name="message"
              />
            </div>

            <div className="flex justify-end" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
              <Button label="Send" />
            </div>
          </div>
        </div>
      </form>
    </React.Fragment>
  )
}

export default ContactForm;