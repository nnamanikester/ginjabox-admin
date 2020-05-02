import React, { useState } from 'react';
import axios from "axios";
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
import { validateEmail } from "../../functions";
import { apiUrl, appUrl } from "../../config";

const Login = props => {


  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  const sendMail = async (email) => {
    email.toLowerCase();
    setLoading(true);
    const data = { email, appUrl }

    await axios.post(`${apiUrl}/password-reset`, data)
      .then(res => {
        if (res.data.error) {
          setLoading(false);
          return setFeedback(res.data.message);
        }
        setLoading(false);
        setSuccess("An email has been sent to you to help you reset your password. \nPlease check your mail for instructions on how to reset your password. \nDon't forget to also check your spam folder.");
      })
      .catch(err => {
        setLoading(false);
        setFeedback(err.response.data.message);
      })

  }

  const resetPassword = () => {
    setFeedback(null);
    if (!email) {
      setLoading(false);
      return setFeedback("Email field cannot be empty!")
    };
    if (!validateEmail(email)) {
      setLoading(false);
      return setFeedback("Invalid email address!")
    };
    sendMail(email);
  }

  if (success) {
    return (
      <MDBContainer className="d-flex justify-content-center">
        <MDBCol md='12' lg='5'>
          <div className="teal px-5 py-3">
            <img src={Logo} style={{ width: "100%" }} alt="logo" />
          </div>
          <MDBCard className="mt-2">
            <MDBCardBody>
              <p className='h5 text-center mb-4 text-success'>SUCCESS!!!</p>
              <div className="alert-success">
                {success && success}
              </div>
              <div className='text-center'>
                <p className="text-center">
                  Didn't get the mail?
                </p>
                <MDBBtn className="teal accent-4" onClick={() => {
                  setSuccess(null);
                  resetPassword();
                }
                }>Resend</MDBBtn>
                <MDBLink className="teal-text" to="/login">Back To Login</MDBLink>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBContainer>
    )
  }

  return (
    <MDBContainer className="d-flex justify-content-center">
      <MDBCol md='12' lg='5'>
        <div className="teal px-5 py-3">
          <img src={Logo} style={{ width: "100%" }} alt="logo" />
        </div>
        <MDBCard className="mt-2">
          <MDBCardBody>
            <div className="alert-success">
              {success && success}
            </div>
            <p className='h5 text-center mb-4'>Reset password</p>
            <p className="text-center">Enter your email below, you are going to receive a mail to reset your password.</p>
            <MDBInput
              icon='envelope'
              onChange={(e) => setEmail(e.target.value)}
              iconClass='grey-text'
              label='Your email'
            />
            <div className='text-center'>
              <div className="alert-danger">
                {feedback && feedback}
              </div>
              <MDBBtn className="teal accent-4" onClick={() => resetPassword()}>Reset {loading && (
                <div className="spinner-border spinner-border-sm text-white" role="status">
                  <span className="sr-only">Loading...</span>
                </div>)}</MDBBtn>
              <MDBLink className="teal-text" to="/login">Back To Login</MDBLink>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBContainer>
  );
}

export default Login;