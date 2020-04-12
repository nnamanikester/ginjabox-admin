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

const AvailableWarehouse = () => {
  const [loading, setLoading] = useState(false);
  const [totalCommissions, setTotalCommissions] = useState(0);

  const loadTotalCommissions = async () => {
    setLoading(true);
    axios.get(`${apiUrl}/statistics/total-available-warehouses`, {
      headers: { "x-admin-auth": localStorage.getItem('token') }
    })
      .then(res => {
        setTotalCommissions(res.data.data);
        setLoading(false);
      })
      .catch(err => {
        return 0;
      })
  }

  useEffect(() => {
    loadTotalCommissions();
  }, []);

  return (
    <MDBCol xl="3" md="6" className="mb-4">
      <MDBCard cascade className="cascading-admin-card">
        <div className="admin-up">
          <MDBIcon icon="home" className="teal accent-4" />
          <div className="data">
            <p>Available Warehouse</p>
            <h5 className="font-weight-bold dark-grey-text">
              {totalCommissions && totalCommissions}
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
          <p className="card-text">Total available Warehouses</p>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
}

export default AvailableWarehouse;