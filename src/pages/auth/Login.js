import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCol,
  MDBInput,
  MDBCard,
  MDBCardBody,
  MDBLink,
} from 'mdbreact';
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { LogIn } from "../../Redux/actions/authentication";
import Logo from "../../assets/ginjabox.png";
import { apiUrl } from "../../config";

const validateEmail = (email) => {
  const exp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
  return exp.test(String(email).toLowerCase());
}


const Login = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector(state => state.isLogged);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [feedback, setFeedback] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loader, setLoader] = useState(false);

  const authenticate = async (email, password) => {
    email.toLowerCase();
    setLoader(true);
    const data = { email, password }

    await axios.post(`${apiUrl}/authenticate`, data)
      .then(res => {
        const { success, error, message, data } = res.data;

        if (error) setFeedback(message);
        if (success) {
          const details = {
            email: data.email,
            firstName: data.firstName,
            lastName: data.lastName
          }
          setSuccess(message);
          dispatch(LogIn(details));
        }
        setLoader(false);
        return res.data;
      })
      .catch(err => {
        setLoader(false);
        console.log(err);
      })

  }

  const goToDashboard = () => {
    setFeedback(null);
    if (!email) {
      setLoader(false);
      return setFeedback("Email field cannot be empty!")
    };
    if (!validateEmail(email)) {
      setLoader(false);
      return setFeedback("Invalid email address!")
    };
    if (!password) {
      setLoader(false);
      return setFeedback("Password field cannot be empty!")
    }
    authenticate(email, password);
  }

  return (
    <MDBContainer className="d-flex justify-content-center">
      <MDBCol md='12' lg='5'>
        <div className="teal px-5 py-3">
          <img src={Logo} style={{ width: "100%" }} alt="logo" />
        </div>
        <MDBCard className="mt-2">
          <MDBCardBody>
            <p className='h5 text-center mb-4'>Sign in</p>
            <MDBInput
              icon='envelope'
              iconClass='grey-text'
              label='Your email'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <MDBInput
              type='password'
              icon='lock'
              iconClass='grey-text'
              label='Your password'
              onChange={e => setPassword(e.target.value)}
              value={password}
            />
            <div className="alert-danger">
              {feedback && feedback}
            </div>
            <div className="alert-success">
              {success && success}
            </div>
            <div className='text-center'>
              <MDBBtn className="teal accent-4" onClick={() => goToDashboard()}>Login {loader && (
                <div className="spinner-border spinner-border-sm text-white" role="status">
                  <span className="sr-only">Loading...</span>
                </div>)}</MDBBtn>
              <MDBLink className="teal-text" to="/password-reset">Forgot Password?</MDBLink>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBContainer>
  );
}

export default Login;
