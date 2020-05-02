import React, { useState, useEffect } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCol,
  MDBInput,
  MDBCard,
  MDBCardBody,
  MDBLink
} from "mdbreact";
import axios from "axios";
import { apiUrl } from "../../config";

const NewPassword = ({ match }) => {

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [feedback, setFeedback] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  const [expiredToken, setExpiredToken] = useState(false);
  const [email, setEmail] = useState(null);


  const validateToken = async () => {
    await axios.post(`${apiUrl}/password-reset/validate-token`, { token: match.params.token })
      .then(res => {
        if (res.data.error) {
          return setExpiredToken(res.data.data.message);
        }
        setEmail(res.data.data.email);
        return setPageLoading(false);
      })
      .catch(err => {
        console.log(err.response);
        setExpiredToken(err.response.data.message);
        return setPageLoading(false);
      })
  }

  useEffect(() => {
    validateToken();
  }, [])

  const handleEditpassword = async () => {
    setLoading(true);
    setFeedback(null);
    setSuccess(null);
    if (!newPassword) {
      setLoading(false);
      return setFeedback("You must specify a new password!")
    }
    if (!confirmPassword) {
      setLoading(false);
      return setFeedback("Please confirm your password!")
    }
    if (confirmPassword !== newPassword) {
      setLoading(false);
      return setFeedback("Passwords do not match!")
    }
    setFeedback(null);
    await axios.put(`${apiUrl}/set-new-password`, { email, newPassword })
      .then(res => {
        if (res.data.error) {
          setLoading(false);
          return setFeedback("An Error occured while setting your password \nPlease try again!");
        }
        setLoading(false);
        setNewPassword('');
        setConfirmPassword('');
        return setSuccess("Password Updated Successfully!");
      })
      .catch(err => {
        setLoading(false);
        return setFeedback("There's a problem reseting your password!");
      })
  }


  if (pageLoading) {
    return (
      <h1 className="text-center">
        <div className="spinner-border spinner-border-lg teal-text" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </h1>
    );
  }

  if (success) {
    return (
      <MDBContainer className="d-flex justify-content-center">
        <MDBCol md='12' lg='5'>
          <MDBCard className="mt-2">
            <MDBCardBody>
              <div className="alert-success">
                {success && success}
              </div>
              <div className='text-center'>
                <MDBLink to="/login" >
                  <MDBBtn className="teal accent-4">LOGIN</MDBBtn>
                </MDBLink>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBContainer>
    );
  }

  if (expiredToken) {
    return <h1 className="text-center">{expiredToken}</h1>;
  } else {
    return (
      <MDBContainer className="d-flex justify-content-center">
        <MDBCol md='12' lg='5'>
          <MDBCard className="mt-2">
            <MDBCardBody>
              <p className='h5 text-center mb-4'>New Password</p>
              <MDBInput
                type='password'
                label='New Password'
                onChange={e => setNewPassword(e.target.value)}
                value={newPassword}
              />
              <MDBInput
                type='password'
                label='Confirm Password'
                onChange={e => setConfirmPassword(e.target.value)}
                value={confirmPassword}
              />
              <div className="alert-danger">
                {feedback && feedback}
              </div>
              <div className="alert-success">
                {success && success}
              </div>
              <div className='text-center'>
                <MDBBtn className="teal accent-4" onClick={() => handleEditpassword()}>SAVE {loading && (
                  <div className="spinner-border spinner-border-sm text-white" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>)}</MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBContainer>
    );
  }
};

export default NewPassword;
