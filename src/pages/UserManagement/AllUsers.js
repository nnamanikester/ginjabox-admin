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

const AllUsers = () => {

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
            name: `${user.firstName} ${user.lastName}`,
            email: user.email,
            phone: user.phoneNumber,
            type: user.type.name,
            accountStatus: user.status === 1 ? <MDBBadge className="success-color">Active</MDBBadge> : <MDBBadge className="danger-color">Banned</MDBBadge>,
            action: (<div>
              <Link to={`/user/${user.id}`}><MDBBadge className="teal"><MDBIcon icon="eye" className="white-text" /></MDBBadge></Link>
              <MDBBadge className="primary-color mx-1"><MDBIcon icon="edit" className="white-text" /></MDBBadge>
              <MDBBadge className={user.status === 1 ? "danger-color" : "success-color"}><MDBIcon icon={user.status === 1 ? "ban" : "check"} className="white-text" /></MDBBadge>
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
    </MDBContainer>
  );
};

export default AllUsers;
