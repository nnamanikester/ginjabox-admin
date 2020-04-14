/* 
* List of all users that are also warehousers are diplayed here
* When you click to view the warehouse listings. It brings up a list
* having the listings by that particular user.
*/
import React, { useState, useEffect } from "react";
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
import Skeleton from "react-loading-skeleton";

const AllWarehouser = () => {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

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
        label: "Phone",
        field: "phone",
      },
      {
        label: "Email",
        field: "email",
      },
      {
        label: "Account Status",
        field: "accountStatus"
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
          if (user.type.name === "warehouser") {
            const row = {
              sn: sn + 1,
              id: user.id,
              name: `${user.firstName} ${user.lastName}`,
              email: user.email,
              phone: user.phoneNumber,
              accountStatus: user.status === 2 ? <MDBBadge className="success-color">Active</MDBBadge> : <MDBBadge className="danger-color">Banned</MDBBadge>,
              action: (<div>
                <Link to={`/user/${user.id}`}><MDBBadge className="teal"><MDBIcon icon="eye" className="white-text" /></MDBBadge></Link>
                <MDBBadge className="primary-color mx-1"><MDBIcon icon="edit" className="white-text" /></MDBBadge>
                {user.status === 2 ? <MDBBadge className="danger-color" onClick={() => handleBanUser(user)}><MDBIcon icon="ban" className="white-text" /></MDBBadge> : <MDBBadge className="success-color" onClick={() => handleActivateUser(user)}><MDBIcon icon="check" className="white-text" /></MDBBadge>}
              </div>)
            };
            sn++;
            return row;
          }
          return null;
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

  return (
    <MDBContainer>
      <MDBCard>
        <MDBCard narrow className="z-depth-0">
          <MDBView
            cascade
            className="teal accent-4 narrower py-2 my-3 d-flex justify-content-between align-items-center"
          >
            <div className="text-left"></div>
            <span className="white-text text-bold mx-3">All Warehousers</span>
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

export default AllWarehouser;
