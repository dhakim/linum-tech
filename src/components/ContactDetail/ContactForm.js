import React, { useState } from "react";
import './ContactDetail.scss';
import TextField from "../TextField/TextField";
import TextArea from "../TextArea/TextArea";
import Button from "../Button/Button";
import { useFormik } from 'formik';
import Select from "../Select/Select";

const ContactForm = () => {

  const [industryValue, setIndustryValue] = useState("");
  const [interestValue, setInterestValue] = useState("");

  const formik = useFormik({
    initialValues: {
      name: '', phone: '', email: '', message: ''
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const industriesOptions = [
    {
      label: 'Oil and Gass',
      value: 'oil-and-gass'
    },
    {
      label: 'Construction',
      value: 'construction'
    },
    {
      label: 'Other',
      value: 'other-industry'
    },
  ];

  const interestOptions = [
    {
      label: 'Electronic Components',
      value: 'electronic-components'
    },
    {
      label: 'Connectors',
      value: 'connectors'
    },
    {
      label: 'Other',
      value: 'other-connectors'
    },
  ];

  const onIndustryChange = (e) => {
    console.info(e);
    setIndustryValue(e.target.value)
  }

  const onInterestChange = (e) => {
    console.info(e);
    setInterestValue(e.target.value)
  }

  return (
    <React.Fragment>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-row">
          <div className="item">
            <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
              <TextField 
                label="Name *"
                type="text"
                name="name"
              />
            </div>

            <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
              <TextField 
                label="Email *"
                type="email"
                name="email"
              />
            </div>

            <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
              <TextField 
                label="Phone *"
                type="tel"
                name="phone"
              />
            </div>

            <div className="form-row">
              <div className="item" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                <Select
                  label="Industry"
                  options={industriesOptions}
                  name="industry"
                  onChange = {onIndustryChange}
                  value={industryValue} 
                />
              </div>

              <div className="item" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                <TextField 
                  label="Other"
                  type="text"
                  name="otherIndustry"
                  className={industryValue === 'Other' ? '' : 'disabled'}
                  isDisabled={industryValue === 'Other' ? false : true}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="item" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                <Select
                  label="Your Interest"
                  options={interestOptions}
                  name="yourInterest"
                  onChange = {onInterestChange}
                  value={industryValue} 
                />
              </div>

              <div className="item" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                <TextField 
                  label="Other"
                  type="text"
                  name="otherInterest"
                  className={interestValue === 'Other' ? '' : 'disabled'}
                  isDisabled={interestValue === 'Other' ? false : true}
                />
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
              <TextArea 
                label="Message *"
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