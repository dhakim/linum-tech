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
            <TextField 
              label="Name"
              type="text"
              name="name"
            />

            <TextField 
              label="Email"
              type="email"
              name="email"
            />

            <TextField 
              label="Phone"
              type="tel"
              name="phone"
            />

            <TextArea 
              label="Message"
              name="message"
            />

            <div className="flex justify-end">
              <Button label="Send" />
            </div>
          </div>
        </div>
      </form>
    </React.Fragment>
  )
}

export default ContactForm;