import React from "react";
import {
  MDBContainer,
  MDBCol,
  MDBCard,
  MDBInput,
  MDBCardBody,
  MDBBtn,
  MDBSelectInput,
  MDBSelect,
  MDBSelectOption,
  MDBSelectOptions
} from 'mdbreact';

const AddNewStaff = () => {
  return (
    <MDBContainer className="d-flex justify-content-center">
      <MDBCol lg='5' className='mb-4'>
        <MDBCard>
          <MDBCardBody>
            <div className='form-header teal accent-4'>
              <h3> Add New Staff </h3>
            </div>

            <MDBInput label='First Name' />
            <MDBInput label='Last Name' />
            <MDBInput label='Email' type="email" />
            <MDBInput label='Phone' type="number" />
            <MDBSelect label="Select Role" >
              <MDBSelectInput />
              <MDBSelectOptions>
                <MDBSelectOption disabled>Select Role</MDBSelectOption>
                <MDBSelectOption value="1">Support</MDBSelectOption>
                <MDBSelectOption value="2">Management</MDBSelectOption>
                <MDBSelectOption value="3">Team Lead</MDBSelectOption>
              </MDBSelectOptions>
            </MDBSelect>
            <div className='text-center'>
              <MDBBtn className='teal accent-4'>Create</MDBBtn>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBContainer>
  );
};

export default AddNewStaff;
