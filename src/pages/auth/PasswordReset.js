import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCol,
  MDBInput,
  MDBCard,
  MDBCardBody,
  MDBLink
} from 'mdbreact';

const Login = props => {
  console.log(props);
  return (
    <MDBContainer className="d-flex mt-5 justify-content-center">
      <MDBCol md='12' lg='5' className=' mt-5'>
        <MDBCard>
          <MDBCardBody>
            <p className='h5 text-center mb-4'>Reset password</p>
            <p className="text-center">Enter your email below, you are going to receive a mail to reset your password.</p>
            <MDBInput
              icon='envelope'
              iconClass='grey-text'
              label='Your email'
            />
            <div className='text-center'>
              <MDBBtn className="teal accent-4">Reset</MDBBtn>
              <MDBLink className="teal-text" to="/">Back To Login</MDBLink>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBContainer>
  );
}

export default Login;