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
import { useDispatch } from "react-redux";
import { LogIn } from "../../Redux/actions/login";

const Login = ({ login }) => {
  const dispatch = useDispatch();

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
              <MDBBtn className="teal accent-4" onClick={() => {
                login();
                dispatch(LogIn());
              }}>Login</MDBBtn>
              <MDBLink className="teal-text" to="/password-reset">Forgot Password?</MDBLink>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBContainer>
  );
}

export default Login;