import React, { useEffect, useState } from "react";
import { apiUrl } from "../../config";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  MDBCard,
  MDBCardBody,
  MDBContainer,
  MDBDataTable,
  MDBView,
  MDBBadge,
  MDBIcon
} from "mdbreact";


const AllStaff = () => {

  const [staff, setStaff] = useState([]);
  const [loading, setLoading] = useState(false);

  const data = {
    columns: [
      {
        label: "S/N",
        field: "sn"
      },
      {
        label: "Name",
        field: "name"
      },
      {
        label: "Email",
        field: "email"
      },
      {
        label: "Phone",
        field: "phone"
      },
      {
        label: "Role",
        field: "role"
      },
      {
        label: "Created At",
        field: "createdAt"
      },
      {
        label: "Action",
        field: "action"
      }
    ],
    rows: !loading ? staff : [{
      sn: <div className="spinner-border spinner-border-sm teal-text" role="status" ><span className="sr-only">Loading...</span></div >,
      name: <div className="spinner-border spinner-border-sm teal-text" role="status" ><span className="sr-only">Loading...</span></div >,
      email: <div className="spinner-border spinner-border-sm teal-text" role="status" ><span className="sr-only">Loading...</span></div >,
      phone: <div className="spinner-border spinner-border-sm teal-text" role="status" ><span className="sr-only">Loading...</span></div >,
      role: <div className="spinner-border spinner-border-sm teal-text" role="status" ><span className="sr-only">Loading...</span></div >,
      createdAt: <div className="spinner-border spinner-border-sm teal-text" role="status" ><span className="sr-only">Loading...</span></div >,
      action: <div className="spinner-border spinner-border-sm teal-text" role="status" ><span className="sr-only">Loading...</span></div >
    }]
  };


  const loadUsers = async () => {
    setLoading(true);
    axios.get(`${apiUrl}/admin-users`, {
      headers: { "x-admin-auth": localStorage.getItem('token') }
    })
      .then(res => {
        const rows = res.data.data.map(user => {
          const row = {
            sn: staff.length + 1,
            name: `${user.firstName} ${user.lastName}`,
            email: user.email,
            phone: user.phoneNumber,
            role: user.role.name,
            createdAt: user.createdAt,
            action: user.roleId !== 1 ? (<div>
              <MDBBadge className="primary-color mx-1"><MDBIcon icon="edit" className="white-text" /></MDBBadge>
              <MDBBadge className="danger-color"><MDBIcon icon="ban" className="white-text" /></MDBBadge>
            </div>) : null
          };
          return row;
        })
        setLoading(false);
        setStaff([...rows]);
      })
      .catch(err => {
        console.log(err);
        return [];
      })
  }

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <MDBContainer>
      <MDBCard>
        <MDBCard narrow className="z-depth-0">
          <MDBView
            cascade
            className="teal accent-4 narrower py-2 my-3 d-flex justify-content-between align-items-center"
          >
            <div className="text-left"></div>
            <span className="white-text text-bold mx-3">All Staff</span>
            <div className="text-right"></div>
          </MDBView>
        </MDBCard>
        <MDBCardBody>
          <MDBDataTable striped responsive bordered small hover data={data} />
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};

export default AllStaff;
