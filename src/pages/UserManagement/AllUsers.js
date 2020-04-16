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
  MDBIcon,
  MDBModal,
  MDBBadge,
  MDBModalBody,
  MDBModalHeader,
  MDBBtn,
  MDBInput
} from "mdbreact";
import Skeleton from "react-loading-skeleton";

const AllUsers = () => {

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const toggleEdit = (user) => {
    setUser(user);
    setEditModal(!editModal);
  }

  const data = {
    columns: [
      {
        label: "S/N",
        field: "sn",
      },
      {
        label: "User ID",
        field: "id"
      },
      {
        label: "Name",
        field: "name",
      },
      {
        label: "Email",
        field: "email",
      },
      {
        label: "Phone",
        field: "phone",
      },
      {
        label: "Account Type",
        field: "type",
      },
      {
        label: "Account Status",
        field: "accountStatus",
      },
      {
        label: "Action",
        field: "action",
      }
    ],
    rows: !loading ? users : [{
      sn: <Skeleton />,
      id: <Skeleton />,
      name: <Skeleton />,
      email: <Skeleton />,
      phone: <Skeleton />,
      type: <Skeleton />,
      accountStatus: <Skeleton />,
      action: <Skeleton />
    }]
  };

  const loadUsers = async () => {
    setLoading(true);
    axios.get(`${apiUrl}/users`, {
      headers: { "x-admin-auth": localStorage.getItem('token') }
    })
      .then(res => {
        let sn = users.length;
        const rows = res.data.data.map(user => {
          const row = {
            sn: sn + 1,
            id: user.id,
            name: `${user.firstName} ${user.lastName}`,
            email: user.email,
            phone: user.phoneNumber,
            type: user.type.name,
            accountStatus: user.status === 2 ? <MDBBadge className="success-color">Active</MDBBadge> : <MDBBadge className="danger-color">Banned</MDBBadge>,
            action: (<div>
              <Link to={`/user/${user.id}`}><MDBBadge className="teal"><MDBIcon icon="eye" className="white-text" /></MDBBadge></Link>
              <MDBBadge className="primary-color mx-1" onClick={() => toggleEdit(user)}><MDBIcon icon="edit" className="white-text" /></MDBBadge>
              {user.status === 2 ? <MDBBadge className="danger-color" onClick={() => handleBanUser(user)}><MDBIcon icon="ban" className="white-text" /></MDBBadge> : <MDBBadge className="success-color" onClick={() => handleActivateUser(user)}><MDBIcon icon="check" className="white-text" /></MDBBadge>}
            </div>)
          };
          sn++;
          return row;
        })
        setLoading(false);
        setUsers([...rows]);
      })
      .catch(err => {
        return [];
      })
  }

  useEffect(() => {
    loadUsers();
  }, []);

  const handleBanUser = (user) => {
    if (window.confirm(`Are you sure you want to ban ${user.firstName}`)) {
      axios.put(`${apiUrl}/users/${user.id}`, { status: 1 }, {
        headers: { "x-admin-auth": localStorage.getItem('token') }
      })
        .then(res => {
          if (res.data.success) {
            window.location.reload();
          }
        })
        .catch(err => {
          return err;
        })
    }
  }

  const handleActivateUser = (user) => {
    if (window.confirm(`Are you sure you want to Unblock ${user.firstName}`)) {
      axios.put(`${apiUrl}/users/${user.id}`, { status: 2 }, {
        headers: { "x-admin-auth": localStorage.getItem('token') }
      })
        .then(res => {
          if (res.data.success) {
            window.location.reload();
          }
        })
        .catch(err => {
          return err;
        })
    }
  }

  const handleEditInput = (val, data) => {
    user[data] = val.target.value;
    setUser({ ...user });
  }
  const handleEditUser = () => {
    setLoading(true);
    const data = {
      firstName: user.firstName,
      lastName: user.lastName,
      phoneNumber: user.phoneNumber,
      email: user.email
    }
    axios.put(`${apiUrl}/users/${user.id}`, data, {
      headers: { "x-admin-auth": localStorage.getItem('token') }
    })
      .then(res => {
        if (res.data.success) {
          window.location.reload();
          return toggleEdit(user);
        }
      })
      .catch(err => {
        setFeedback("Unable to update user!");
        return err;
      })
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
            <span className="white-text text-bold mx-3">All Users</span>
            <div className="text-right"></div>
          </MDBView>
        </MDBCard>
        <MDBCardBody>
          <MDBDataTable striped responsive bordered small hover data={data} />
        </MDBCardBody>
      </MDBCard>

      <MDBModal
        isOpen={editModal}
        toggle={() => this.toggleEdit(user)}
        inline={editModal === false}
        backdrop={editModal === false ? false : true}
        cascading
        disableFocusTrap={editModal === false ? true : false}>
        <MDBModalHeader
          toggle={editModal === false ? () => { } : () => toggleEdit(user)}
          className='teal accent-4 white-text'
        >
          <MDBIcon icon="add" className='mr-2' />{' '}
          Edit {user && user.firstName}'s Info
        </MDBModalHeader>
        <div className="alert-danger">{feedback && feedback}</div>
        <MDBModalBody className='mb-0'>
          <MDBInput label='First Name' value={user && user.firstName} onChange={(val) => handleEditInput(val, "firstName")} />
          <MDBInput label='Last Name' value={user && user.lastName} onChange={(val) => handleEditInput(val, "lastName")} />
          <MDBInput label='Email' type="email" value={user && user.email} onChange={(val) => handleEditInput(val, "email")} />
          <MDBInput label='Phone Number' type="number" value={user && user.phoneNumber} onChange={(val) => handleEditInput(val, "phoneNumber")} />
          <div className='text-center mb-1-half'>
            <MDBBtn
              className='teal accent-4 mb-2'
              onClick={() => handleEditUser()}
            >{loading && (
              <div className="spinner-border spinner-border-sm text-white" role="status">
                <span className="sr-only">Loading...</span>
              </div>)}
              Update
              <MDBIcon icon="plus" className='ml-1' />
            </MDBBtn>
          </div>
        </MDBModalBody>
      </MDBModal>

    </MDBContainer>
  );
};

export default AllUsers;
