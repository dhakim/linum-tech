import React, {useState} from 'react';
import './CareersFormDetail.scss';
import TextField from '../TextField/TextField';
import TextArea from '../TextArea/TextArea';
import Select from '../Select/Select';
import DatePicker from '../DatePicker/DatePicker';
import FileUpload from '../FileUploader/FileUploader';
import Button from '../Button/Button';
import Countries from '../../data/countries.json';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const CareerForm = () => {
  const [jobsValue, setJobsValue] = useState("");

  const formik = useFormik({
    initialValues: {
      applyFor: '', other: '', careerObjective: '', name: '', phone: '', email: '', address: '', country: '', 
      nationality: '', dateofbirth: '', gender: '', maritialStatus: '', resumefile: ''
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required").matches(/^[a-zA-Z ]+$/, "Only alphabets are allowed"),
      phone: Yup.string().required("Phone is required").matches(/^\+?[1-9][0-9]{7,14}$/, 'Enter correct phone e.g. +9713456000000'),
      email: Yup.string().required("Email is required").matches(/^\S+@\S+\.\S+$/, 'Please enter correct email ID'),
      address: Yup.string().required("address is required"),
    }),
  });

  let countries = Countries.countries;

  const jobs = [
    {
      label: 'Business Development Executive',
      value: 'Business Development Executive'
    },
    {
      label: 'Sales Engineer',
      value: 'Sales Engineer'
    },
    {
      label: 'Supply Chain Executive',
      value: 'Supply Chain Executive'
    },
    {
      label: 'Other',
      value: 'Other'
    }
  ];

  const gender = [
    {
      label: 'Male',
      value: 'male'
    },
    {
      label: 'Female',
      value: 'female'
    }
  ];

  const maritialStatus = [
    {
      label: 'Married',
      value: 'married'
    },
    {
      label: 'Single',
      value: 'single'
    },
    {
      label: 'Divorced',
      value: 'divorced'
    },
  ];

  const onJobChange = (e) => {
    setJobsValue(e.target.value)
  }

  return(
    <React.Fragment>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-section">
          <h3 data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">Position & Objective</h3>
          <div className="form-row">
            <div className="item" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
              <Select 
                label="Applying as *"
                options={jobs}
                name="applyFor"
                onChange = {onJobChange}
                value={jobsValue} 
              />
            </div>

            <div className="item" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
              <TextField 
                label="Other" 
                name="other" 
                className={jobsValue === 'Other' ? '' : 'disabled'}
                isDisabled={jobsValue === 'Other' ? false : true}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="item" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
              <TextArea label="Career Objective" name="careerObjective" />
            </div>

          </div>
        </div>

        <div className="form-section">
          <h3 data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">Basic Information</h3>
          <div className="form-row">
            <div className="item" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
              <TextField 
                label="Name *" 
                name="name" 
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                errorMessage={formik.touched.name && formik.errors.name ? formik.errors.name : null}  
              />

            </div>

            <div className="item" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
              <TextField 
                label="Phone *" 
                name="phone" 
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                errorMessage={formik.touched.phone && formik.errors.phone ? formik.errors.phone : null}  
              />
            </div>

            <div className="item" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
              <TextField 
                label="Email *" 
                name="email" 
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                errorMessage={formik.touched.email && formik.errors.email ? formik.errors.email : null}  
              />
            </div>
          </div>

          <div className="form-row">
            <div className="item" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
              <TextField 
                label="Address *" 
                name="address" 
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                errorMessage={formik.touched.address && formik.errors.address ? formik.errors.address : null}  
              />
            </div>

            <div className="item" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
              <Select 
                label="Country *"
                options={countries}
                name="country"
              />
            </div>

            <div className="item" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
              <Select 
                label="Nationality"
                options={countries}
                name="nationality"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="item" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
              <DatePicker 
                label="Date of Birth *" 
                name="dateofbirth" 
              />
            </div>

            <div className="item" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
              <Select 
                label="Gender *"
                options={gender}
                name="gender"
              />
            </div>

            <div className="item" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
              <Select 
                label="Maritial Status"
                options={maritialStatus}
                name="maritialStatus"
              />
            </div>
          </div>

          {/* <div className="form-row">
            <div className="item" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
              <TextArea label="Career Objective" name="applyAcareerObjective" />
            </div>

          </div> */}
        </div>

        <div className="form-section">
          <h3 data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">Upload Resume / CV</h3>
          <h5 data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000" className="helping-text">(Only .doc, .docx or .pdf files are allowed)</h5>
          <FileUpload name="resumefile" />
        </div>

        <div className="flex justify-end" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
          <Button label="Submit" />
        </div>

      </form>
    </React.Fragment>
  )
}
export default CareerForm;