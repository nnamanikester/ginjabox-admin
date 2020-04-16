import React, { useState, useEffect } from "react";
import { apiUrl } from "../../config";
import axios from "axios";
import { Redirect } from "react-router-dom";
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
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [success, setSuccess] = useState(null);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    roleId: '',
    role: '',
    password: ''
  });
  const loadRoles = async () => {
    axios.get(`${apiUrl}/admin-roles`, {
      headers: { "x-admin-auth": localStorage.getItem('token') }
    })
      .then(res => {
        const items = res.data.data.map(role => {
          return role;
        })
        setRoles([...items]);
      })
      .catch(err => {
        return [];
      })
  }

  useEffect(() => {
    loadRoles();
  }, []);

  const validateEmail = (email) => {
    const exp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    return exp.test(String(email).toLowerCase());
  }

  const handleSubmit = () => {
    setLoading(true);
    setFeedback(null);
    if (!form.email || !form.phoneNumber || !form.roleId || !form.role || !form.password || !form.firstName || !form.lastName) {
      setLoading(false);
      return setFeedback("All fields are required to create a staff.");
    }
    if (!validateEmail(form.email)) {
      setLoading(false);
      return setFeedback("Invalid Email");
    };
    axios.post(`${apiUrl}/admin-users`, form, {
      headers: { "x-admin-auth": localStorage.getItem('token') }
    })
      .then(res => {
        setLoading(false);
        setForm({
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          roleId: '',
          role: '',
          password: ''
        });
        setSuccess("Staff Created Successfully!");
        window.location.href = '/staff/all-staff';
      })
      .catch(err => {
        setLoading(false);
      })
  }
  let cnt = 2;

  return (
    <MDBContainer className="d-flex justify-content-center">
      <MDBCol lg='5' className='mb-4'>
        <MDBCard>
          <MDBCardBody>
            <div className='form-header teal accent-4'>
              <h3> Add New Staff </h3>
            </div>
            <div className="mx-2 alert-danger">{feedback && feedback}</div>
            <div className="mx-2 alert-success">{success && success}</div>
            <MDBInput label='First Name' value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} />
            <MDBInput label='Last Name' value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} />
            <MDBInput label='Email' value={form.email} type="email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
            <MDBInput label='Phone' value={form.phoneNumber} type="number" onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })} />
            <MDBInput label='Default Password' value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
            <MDBSelect label="Select Role ID" value={form.roleId} getValue={(val) => setForm({ ...form, roleId: val[0] })}>
              <MDBSelectInput />
              <MDBSelectOptions>
                <MDBSelectOption disabled>Select Role ID</MDBSelectOption>

                {roles.map(role => {
                  if (roles[0] === role) return null;
                  return <MDBSelectOption key={role.id} value={cnt}>{`${cnt++} - ${role.name}`}</MDBSelectOption>
                })}
              </MDBSelectOptions>
            </MDBSelect>
            <MDBSelect label="Select Role" value={form.role} getValue={(val) => setForm({ ...form, role: val[0] })}>
              <MDBSelectInput />
              <MDBSelectOptions>
                <MDBSelectOption disabled>Select Role</MDBSelectOption>
                {roles.map(role => {
                  if (roles[0] === role) return null;
                  return <MDBSelectOption key={role.id} value={role.id}>{role.name}</MDBSelectOption>
                })}
              </MDBSelectOptions>
            </MDBSelect>
            <div className='text-center'>
              <MDBBtn className='teal accent-4' onClick={() => handleSubmit()}>
                {loading && (
                  <div className="spinner-border spinner-border-sm text-white" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>)}
                  Create
                  </MDBBtn>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBContainer>
  );
};

export default AddNewStaff;
