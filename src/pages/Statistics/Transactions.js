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
import Skeleton from "react-loading-skeleton";

const Transactions = () => {
  const [totalTransactions, setTotalTransactions] = useState(0);

  const loadTotalTransactions = async () => {
    axios.get(`${apiUrl}/statistics/total-transactions`, {
      headers: { "x-admin-auth": localStorage.getItem('token') }
    })
      .then(res => {
        setTotalTransactions(res.data.data);
      })
      .catch(err => {
        return 0;
      })
  }

  useEffect(() => {
    loadTotalTransactions();
  }, []);


  return (
    <MDBCol xl="3" md="6" className="mb-4">
      <MDBCard cascade className="cascading-admin-card">
        <div className="admin-up">
          <MDBIcon icon="exchange-alt" className="teal accent-4" />
          <div className="data">
            <p>Total Transactions</p>
            <h5 className="font-weight-bold dark-grey-text">
              {totalTransactions || <Skeleton />}
              {/* {loading && <div className="spinner-border spinner-border-sm teal-text" role="status" ><span className="sr-only">Loading...</span></div >} */}
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
          <p className="card-text">Total number of transactions</p>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
}

export default Transactions;