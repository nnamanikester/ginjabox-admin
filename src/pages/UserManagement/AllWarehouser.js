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

const AllWarehouser = () => {

  const [users, setUsers] = useState([]);

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
        label: "Listings",
        field: "listings",
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
        label: "Action",
        field: "action",
      }
    ],
    rows: users
  };

  const loadUsers = async () => {
    axios.get(`${apiUrl}/users`, {
      headers: { "x-admin-auth": localStorage.getItem('token') }
    })
      .then(res => {
        res.data.data.forEach(user => {
          if (user.type.name === "warehouser" && user.status === 1) {
            const row = {
              sn: users.length + 1,
              name: `${user.firstName} ${user.lastName}`,
              email: user.email,
              phone: user.phoneNumber,
              referral: "get it from db",
              joinDate: "fetch Date",
              type: user.type.name,
              accountStatus: (users.length + 1) % 2 === 0 ? <MDBBadge className="success-color">Verified</MDBBadge> : <MDBBadge className="grey">Unverified</MDBBadge>,
              action: (<div>
                <Link to={`/user/${user.id}`} style={{ marginHorizontal: 1 }}><MDBBadge className="teal"><MDBIcon icon="eye" className="white-text" /></MDBBadge></Link>
                <Link to={`/user/${user.id}`}><MDBBadge className="primary-color mx-1"><MDBIcon icon="edit" className="white-text" /></MDBBadge></Link>
                <Link to={`/user/${user.id}`}><MDBBadge className="danger-color"><MDBIcon icon="ban" className="white-text" /></MDBBadge></Link>
              </div>)
            };
            setUsers([...users, row]);
          }
        })
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
