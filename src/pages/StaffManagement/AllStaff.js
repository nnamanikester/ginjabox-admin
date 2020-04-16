import React, { useEffect, useState } from "react";
import { apiUrl } from "../../config";
import axios from "axios";
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
  const [success, setSuccess] = useState(null);

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
        let sn = staff.length;
        const rows = res.data.data.map(user => {
          const row = {
            sn: sn + 1,
            name: `${user.firstName} ${user.lastName}`,
            email: user.email,
            phone: user.phoneNumber,
            role: user.role.name,
            createdAt: user.createdAt,
            action: user.roleId !== 1 ? (<div>
              <MDBBadge className="primary-color mx-1" onClick={() => handleEditStaff(user)}><MDBIcon icon="edit" className="white-text" /></MDBBadge>
              <MDBBadge className="danger-color" onClick={() => handleDeleteStaff(user)}><MDBIcon icon="trash" className="white-text" /></MDBBadge>
            </div>) : null
          };
          sn++;
          return row;
        })
        setLoading(false);
        setStaff(rows);
      })
      .catch(err => {
        console.log(err);
        return [];
      })
  }

  useEffect(() => {
    loadUsers();
  }, []);

  const handleDeleteStaff = (user) => {
    if (window.confirm(`Are you sure you want to delete ${user.firstName} as an Admin? \nNB: This cannot be undone!`)) {
      axios.delete(`${apiUrl}/admin-users/${user.id}`, {
        headers: { "x-admin-auth": localStorage.getItem('token') }
      })
        .then(res => {
          if (res.data.success) {
            setSuccess("Staff deleted successfuly!");
            window.location.reload();
          }
        })
        .catch(err => {
          console.log(err);
        })
    }
  }
  const handleEditStaff = (user) => {
    alert(user.email);
  }

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
          {success && <div className="mx-5 alert-success">{success}</div>}
        </MDBCard>
        <MDBCardBody>
          <MDBDataTable striped responsive bordered small hover data={data} />
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};

export default AllStaff;
