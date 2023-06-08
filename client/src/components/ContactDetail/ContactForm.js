import React, { useState } from "react";
import './ContactDetail.scss';
import TextField from "../TextField/TextField";
import TextArea from "../TextArea/TextArea";
import Button from "../Button/Button";
import { useFormik } from 'formik';
import Select from "../Select/Select";
import * as Yup from 'yup';
import reCaptchaImg from '../../assets/images/capatcha.png';
import axios from "axios";

const ContactForm = () => {

  const [industryValue, setIndustryValue] = useState("");
  const [interestValue, setInterestValue] = useState("");

  let indtxt, intertxt;

  const formik = useFormik({
    initialValues: {
      name: '', phone: '', email: '', message: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required").matches(/^[A-Za-z]+$/, 'Only alphabets are allowed'),
      phone: Yup.string().required("Phone is required").matches(/^\+?[1-9][0-9]{7,14}$/, 'Enter correct phone e.g. +971 00 000 000'),
      email: Yup.string().required("Email is required").matches(/^\S+@\S+\.\S+$/, 'Please enter correct email ID'),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: values => {
      setTimeout(() => {
        // axios POST
        if(values.industry == 'other-industry'){
          indtxt = 'Other: ' + values.otherIndustry;
        } else {
          indtxt = values.industry;
        }
        if(values.yourInterest == 'other-connectors'){
          intertxt = 'Other: ' + values.otherInterest;
        } else {
          intertxt = values.yourInterest;
        }
        const appURL = 'http://192.168.100.5:3001/contact'
        axios.post(appURL, {
            name: values.name,
            email: values.email,
            phone: values.phone,
            industry: indtxt,
            interest: intertxt,
            message: values.message,
        })
        // .then(function (response) {
        //     console.log(response);
        // })
        // .catch(function (error) {
        //     console.log(error);
        // })
        ;
      }, 400)
    },
  });

  const industriesOptions = [
    {
      label: 'Oil and Gass',
      value: 'Oil and Gas'
    },
    {
      label: 'Construction',
      value: 'Construction'
    },
    {
      label: 'Education',
      value: 'Education'
    },
    {
      label: 'Utilities',
      value: 'Utilities'
    },
    {
      label: 'Defence',
      value: 'Defence'
    },
    {
      label: 'Transportation',
      value: 'Transportation'
    },
    {
      label: 'Other',
      value: 'other-industry'
    },
  ];

  const interestOptions = [
    {
      label: 'Electronic Components',
      value: 'Electronic Components'
    },
    {
      label: 'Connectors',
      value: 'Connectors'
    },
    {
      label: 'Cables & Wires',
      value: 'Cables & Wires'
    },
    {
      label: 'Test Equipment',
      value: 'Test Equipment'
    },
    {
      label: 'Automation',
      value: 'Automation'
    },
    {
      label: 'Maintenance Safety & ESD',
      value: 'Maintenance Safety & ESD'
    },
    {
      label: 'Tools & Soldering',
      value: 'Tools & Soldering'
    },
    {
      label: 'Thermal Management',
      value: 'Thermal Management'
    },
    {
      label: 'Mechanical Components',
      value: 'Mechanical Components'
    },
    {
      label: 'Power',
      value: 'Power'
    },
    {
      label: 'Development Boards & Kits',
      value: 'Development Boards & Kits'
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
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                errorMessage={formik.touched.name && formik.errors.name ? formik.errors.name : null}
              />
            </div>

            <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
              <TextField 
                label="Email *"
                type="email"
                name="email"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                errorMessage={formik.touched.email && formik.errors.email ? formik.errors.email : null}
              />
            </div>

            <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
              <TextField 
                label="Phone *"
                type="tel"
                name="phone"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                errorMessage={formik.touched.phone && formik.errors.phone ? formik.errors.phone : null}
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
                  value={interestValue} 
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

            <div className="form-row">
              <img src={reCaptchaImg} alt="reCaptcha" width="300" />
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