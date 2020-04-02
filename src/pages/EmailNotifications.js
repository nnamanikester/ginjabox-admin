import React from "react";
import {
  MDBContainer,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBInput,
  MDBSelect,
  MDBSelectOptions,
  MDBSelectInput,
  MDBSelectOption,
  MDBBtn,
  MDBRow
} from "mdbreact";

const EmailNotifications = () => {
  return (
    <MDBContainer>
      <MDBCol className='mb-4'>
        <MDBCard col="3">
          <MDBCardBody>
            <div className='form-header teal accent-4'>
              <h3>
                <MDBIcon icon='envelope' /> Send An Email:
              </h3>
            </div>

            <MDBInput label='Subject' />
            <MDBRow>
              <MDBCol>
                <MDBSelect label="To" >
                  <MDBSelectInput />
                  <MDBSelectOptions>
                    <MDBSelectOption disabled>Select Receipient</MDBSelectOption>
                    <MDBSelectOption value="1">All Users</MDBSelectOption>
                    <MDBSelectOption value="2">Banned Users</MDBSelectOption>
                    <MDBSelectOption value="3">Select Users</MDBSelectOption>
                  </MDBSelectOptions>
                </MDBSelect>
              </MDBCol>
              <MDBCol>
                <MDBSelect multiple label="If Select Users" >
                  <MDBSelectInput />
                  <MDBSelectOptions>
                    <MDBSelectOption disabled>Select  Users</MDBSelectOption>
                    <MDBSelectOption value="1">email1@email.com</MDBSelectOption>
                    <MDBSelectOption value="2">email2@email.com</MDBSelectOption>
                    <MDBSelectOption value="3">email3@email.com</MDBSelectOption>
                  </MDBSelectOptions>
                </MDBSelect>
              </MDBCol>
            </MDBRow>
            <MDBInput
              type='textarea'
              icon='pencil-alt'
              iconClass='grey-text'
              label='Message'
            />
            <div className='text-center'>
              <MDBBtn color='green' className="teal ">SEND</MDBBtn>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBContainer>
  );
};

export default EmailNotifications;
