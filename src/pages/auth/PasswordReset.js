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
import Logo from "../../assets/ginjabox.png";

const Login = props => {
  console.log(props);
  return (
    <MDBContainer className="d-flex justify-content-center">
      <MDBCol md='12' lg='5'>
        <div className="teal px-5 py-3">
          <img src={Logo} style={{ width: "100%" }} alt="logo" />
        </div>
        <MDBCard className="mt-2">
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
              <MDBLink className="teal-text" to="/login">Back To Login</MDBLink>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBContainer>
  );
}

export default Login;