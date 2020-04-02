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
      <MDBCol md='12' lg='5' className='mt-5'>
        <MDBCard>
          <MDBCardBody>
            <p className='h5 text-center mb-4'>Sign in</p>
            <MDBInput
              icon='envelope'
              iconClass='grey-text'
              label='Your email'
            />
            <MDBInput
              type='password'
              icon='lock'
              iconClass='grey-text'
              label='Your password'
            />
            <div className='text-center'>
              <MDBBtn>Login</MDBBtn>
              <MDBLink to="/password-reset">Forgot Password?</MDBLink>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBContainer>
  );
}

export default Login;