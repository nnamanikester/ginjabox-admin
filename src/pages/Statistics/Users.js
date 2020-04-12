import React, { useEffect, useState } from "react";
import { apiUrl } from "../../config";
import axios from "axios";
import {
  MDBCol,
  MDBCardBody,
  MDBCard,
  MDBIcon,
  MDBProgress
} from "mdbreact"

const Users = () => {
  const [loading, setLoading] = useState(false);
  const [totalUsers, setTotalUsers] = useState(0);

  const loadTotalUsers = async () => {
    setLoading(true);
    axios.get(`${apiUrl}/statistics/total-users`, {
      headers: { "x-admin-auth": localStorage.getItem('token') }
    })
      .then(res => {
        setTotalUsers(res.data.data);
        setLoading(false);
      })
      .catch(err => {
        return 0;
      })
  }

  useEffect(() => {
    loadTotalUsers();
  }, []);

  return (
    <MDBCol xl="3" md="6" className="mb-4">
      <MDBCard cascade className="cascading-admin-card">
        <div className="admin-up">
          <MDBIcon icon="users" className="teal accent-4" />
          <div className="data">
            <p>Total Users</p>
            <h5 className="font-weight-bold dark-grey-text">
              {totalUsers && totalUsers}
              {loading && <div className="spinner-border spinner-border-sm teal-text" role="status" ><span className="sr-only">Loading...</span></div >}
            </h5>
          </div>
        </div>
        <MDBCardBody cascade>
          <MDBProgress
            value={100}
            barClassName="teal accent-3"
            height="6px"
            wrapperStyle={{ opacity: ".7" }}
            className="mb-3"
          />
          <p className="card-text">Total Number of registered users</p>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
}

export default Users;