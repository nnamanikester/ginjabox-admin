import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCol,
  MDBInput,
  MDBCard,
  MDBCardBody
} from "mdbreact";
import axios from "axios";
import { apiUrl } from "../../config";

const EditPassword = () => {

  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [feedback, setFeedback] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleEditpassword = async () => {
    setLoading(true);
    setFeedback(null);
    setSuccess(null);
    if (!oldPassword) {
      setLoading(false);
      return setFeedback("Old password is required to reset your password!")
    }
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
    await axios.put(`${apiUrl}/admin-users/update-password`, { email: localStorage.getItem('email'), oldPassword, newPassword }, {
      headers: { "x-admin-auth": localStorage.getItem('token') }
    })
      .then(res => {
        if (res.data.error) {
          setLoading(false);
          return setFeedback(res.data.message);
        }
        setLoading(false);
        setOldPassword('');
        setNewPassword('');
        setConfirmPassword('');
        return setSuccess("Password Updated Successfully!");
      })
      .catch(err => {
        setLoading(false);
        return setFeedback("There's a problem reseting your password!");
      })
  }


  return (
    <MDBContainer className="d-flex justify-content-center">
      <MDBCol md='12' lg='5'>
        <MDBCard className="mt-2">
          <MDBCardBody>
            <p className='h5 text-center mb-4'>Reset Password</p>
            <MDBInput
              type="password"
              label='Old Password'
              onChange={(e) => setOldPassword(e.target.value)}
              value={oldPassword}
            />
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
              <MDBBtn className="teal accent-4" onClick={() => handleEditpassword()}>RESET {loading && (
                <div className="spinner-border spinner-border-sm text-white" role="status">
                  <span className="sr-only">Loading...</span>
                </div>)}</MDBBtn>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBContainer>
  );
};

export default EditPassword;
