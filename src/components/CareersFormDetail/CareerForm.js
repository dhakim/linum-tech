import React from 'react';
import './CareersFormDetail.scss';
import TextField from '../TextField/TextField';
import TextArea from '../TextArea/TextArea';
import Select from '../Select/Select';
import DatePicker from '../DatePicker/DatePicker';
import FileUpload from '../FileUploader/FileUploader';
import Button from '../Button/Button';

const CareerForm = () => {
  const jobs = [
    {
      label: 'PipeLine Desiner',
      value: 'pipeline-designer'
    },
    {
      label: 'Engineer Desiner',
      value: 'eng-designer'
    },
    {
      label: 'Architechture Engineer',
      value: 'Architechture-Engineer'
    }
  ];

  const countries = [
    {
      label: 'Pakistan',
      value: 'pakistan'
    },
    {
      label: 'Dubai',
      value: 'dubai'
    },
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
  ]

  return(
    <React.Fragment>
      <form>
        <div className="form-section">
          <h3 data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">Position & Objective</h3>
          <div className="form-row">
            <div className="item" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
              <Select 
                label="Applying as *"
                options={jobs}
                name="applyFor"
              />
            </div>

            <div className="item" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
              <TextField label="Other" name="other" />
            </div>
          </div>

          <div className="form-row">
            <div className="item" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
              <TextArea label="Career Objective" name="applyAcareerObjective" />
            </div>

          </div>
        </div>

        <div className="form-section">
          <h3 data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">Basic Information</h3>
          <div className="form-row">
            <div className="item" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
              <TextField label="Name *" name="name" />
            </div>

            <div className="item" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
              <TextField label="Phone *" name="phone" />
            </div>

            <div className="item" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
              <TextField label="Email *" name="email" />
            </div>
          </div>

          <div className="form-row">
            <div className="item" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
              <TextField label="Address *" name="address" />
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
              <DatePicker label="Date of Birth.." />
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

          <div className="form-row">
            <div className="item" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
              <TextArea label="Career Objective" name="applyAcareerObjective" />
            </div>

          </div>
        </div>

        <div className="form-section">
          <h3 data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">Upload Resume / CV</h3>
          <h5 data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000" className="helping-text">(Only .doc, .docx or .pdf files are allowed)</h5>
          <FileUpload />
        </div>

        <div className="flex justify-end" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
          <Button label="Submit" />
        </div>

      </form>
    </React.Fragment>
  )
}
export default CareerForm;