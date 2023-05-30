import React from 'react';
import './CareersFormDetail.scss';
import TextField from '../TextField/TextField';
import TextArea from '../TextArea/TextArea';
import Select from '../Select/Select';



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
          <h3>Position & Objective</h3>
          <div className="form-row">
            <div className="item">
              <Select 
                label="Applying as *"
                options={jobs}
                name="applyFor"
              />
            </div>

            <div className="item">
              <TextField label="Other" name="other" />
            </div>
          </div>

          <div className="form-row">
            <div className="item">
              <TextArea label="Career Objective" name="applyAcareerObjective" />
            </div>

          </div>
        </div>

        <div className="form-section">
          <h3>Basic Information</h3>
          <div className="form-row">
            <div className="item">
              <TextField label="Name *" name="name" />
            </div>

            <div className="item">
              <TextField label="Phone *" name="phone" />
            </div>

            <div className="item">
              <TextField label="Email *" name="email" />
            </div>
          </div>

          <div className="form-row">
            <div className="item">
              <TextField label="Address *" name="address" />
            </div>

            <div className="item">
              <Select 
                label="Country *"
                options={countries}
                name="country"
              />
            </div>

            <div className="item">
              <Select 
                label="Nationality"
                options={countries}
                name="nationality"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="item">
              <TextField label="Address *" name="address" />
            </div>

            <div className="item">
              <Select 
                label="Gender *"
                options={gender}
                name="gender"
              />
            </div>

            <div className="item">
              <Select 
                label="Maritial Status"
                options={maritialStatus}
                name="maritialStatus"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="item">
              <TextArea label="Career Objective" name="applyAcareerObjective" />
            </div>

          </div>
        </div>
      </form>
    </React.Fragment>
  )
}
export default CareerForm;