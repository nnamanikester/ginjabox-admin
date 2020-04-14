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
  MDBBadge
} from "mdbreact";
import Skeleton from "react-loading-skeleton";

const BannedUsers = () => {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const data = {
    columns: [
      {
        label: "S/N",
        field: "sn",
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
        const rows = res.data.data.map(user => {
          let sn = users.length;
          if (user.status !== 2) {
            const row = {
              sn: sn + 1,
              name: `${user.firstName} ${user.lastName}`,
              email: user.email,
              phone: user.phoneNumber,
              type: user.type.name,
              accountStatus: <MDBBadge className="danger-color">Banned</MDBBadge>,
              action: (<div>
                <Link to={`/user/${user.id}`}><MDBBadge className="teal"><MDBIcon icon="eye" className="white-text" /></MDBBadge></Link>
                <MDBBadge className="primary-color mx-1"><MDBIcon icon="edit" className="white-text" /></MDBBadge>
                <MDBBadge className="success-color" onClick={() => handleActivateUser(user)}><MDBIcon icon="check" className="white-text" /></MDBBadge>
              </div>)
            };
            return row;
          }
          sn++;
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


  const handleActivateUser = (user) => {
    if (window.confirm(`Are you sure you want to Unblock ${user.firstName}`)) {
      alert(user.firstName);
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
            <span className="white-text text-bold mx-3">Banned Users</span>
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

export default BannedUsers;
