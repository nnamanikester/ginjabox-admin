import React, { useState, useEffect } from 'react';
import {
  MDBCol,
  MDBCardBody,
  MDBCard,
  MDBRow,
  MDBCardHeader
} from "mdbreact"
import { formatShortNumber } from "../../functions";
import { apiUrl } from "../../config";
import axios from "axios";
import Skeleton from "react-loading-skeleton";

const AppStatistics = () => {
  const [signupsToday, setSignupsToday] = useState(0);
  const [signupsLastWeek, setSignupsLastWeek] = useState(0);
  const [signupsLastMonth, setSignupsLastMonth] = useState(0);
  const [totalSignups, setTotalSignups] = useState(0);

  const [commissionsToday, setCommissionsToday] = useState(0);
  const [commissionsLastWeek, setCommissionsLastWeek] = useState(0);
  const [commissionsLastMonth, setCommissionsLastMonth] = useState(0);
  const [totalCommissions, setTotalCommissions] = useState(0);

  const [transactionsToday, setTransactionsToday] = useState(0);
  const [transactionsLastWeek, setTransactionsLastWeek] = useState(0);
  const [transactionsLastMonth, setTransactionsLastMonth] = useState(0);
  const [totalTransactions, setTotalTransactions] = useState(0);

  const [loading, setLoading] = useState(false);


  const getSignups = async () => {
    setLoading(true);
    axios.get(`${apiUrl}/statistics/signups`, {
      headers: { "x-admin-auth": localStorage.getItem('token') }
    })
      .then(res => {
        setSignupsToday(res.data.data.today);
        setSignupsLastWeek(res.data.data.lastWeek);
        setSignupsLastMonth(res.data.data.lastMonth);
        setTotalSignups(res.data.data.total);
        setLoading(false);
      })
      .catch(err => {
        return 0;
      })
  }


  const getCommissions = async () => {
    setLoading(true);
    axios.get(`${apiUrl}/statistics/commissions-by-date`, {
      headers: { "x-admin-auth": localStorage.getItem('token') }
    })
      .then(res => {
        setCommissionsToday(res.data.data.today);
        setCommissionsLastWeek(res.data.data.lastWeek);
        setCommissionsLastMonth(res.data.data.lastMonth);
        setTotalCommissions(res.data.data.total);
        setLoading(false);
      })
      .catch(err => {
        return 0;
      })
  }

  const getTransactions = async () => {
    setLoading(true);
    axios.get(`${apiUrl}/statistics/transactions-by-date`, {
      headers: { "x-admin-auth": localStorage.getItem('token') }
    })
      .then(res => {
        setTransactionsToday(res.data.data.today);
        setTransactionsLastWeek(res.data.data.lastWeek);
        setTransactionsLastMonth(res.data.data.lastMonth);
        setTotalTransactions(res.data.data.total);
        setLoading(false);
      })
      .catch(err => {
        return 0;
      })
  }

  useEffect(() => {
    getSignups();
    getCommissions();
    getTransactions();
  }, []);

  return (
    <MDBCol lg="6" md="12">
      <MDBCard className="mb-4">
        <MDBCardHeader className="teal accent-4 text-white">
          App Statistics
        </MDBCardHeader>
        <MDBCardBody>
          <MDBRow className="mb-1">
            <MDBCol lg="4" md="4" sm="6">
              <small className="grey-text">Total Signups</small>
              {loading ? <Skeleton /> : <h5>{formatShortNumber(totalSignups)}</h5>}
            </MDBCol>
            <MDBCol lg="2" md="2" sm="6">
              <small className="grey-text">Today</small>
              {loading ? <Skeleton /> : <h5>{formatShortNumber(signupsToday)}</h5>}
            </MDBCol>
            <MDBCol lg="3" md="3" sm="6">
              <small className="grey-text">Last week</small>
              {loading ? <Skeleton /> : <h5>{formatShortNumber(signupsLastWeek)}</h5>}
            </MDBCol>
            <MDBCol lg="3" md="3" sm="6">
              <small className="grey-text">Last Month</small>
              {loading ? <Skeleton /> : <h5>{formatShortNumber(signupsLastMonth)}</h5>}
            </MDBCol>
          </MDBRow>

          {/* <MDBRow className="mb-1">
            <MDBCol lg="4" md="4" sm="6">
              <small className="grey-text">Available Warehouse</small>
              <h5>{formatShortNumber(95)}</h5>
            </MDBCol>
            <MDBCol lg="2" md="2" sm="6">
              <small className="grey-text">Today</small>
              <h5>{formatShortNumber(95)}</h5>
            </MDBCol>
            <MDBCol lg="3" md="3" sm="6">
              <small className="grey-text">Last week</small>
              <h5>{formatShortNumber(127)}</h5>
            </MDBCol>
            <MDBCol lg="3" md="3" sm="6">
              <small className="grey-text">Last Month</small>
              <h5>{formatShortNumber(374)}</h5>
            </MDBCol>
          </MDBRow> */}

          <MDBRow className="mb-1">
            <MDBCol lg="4" md="4" sm="6">
              <small className="grey-text">
                Total Commissions(&#8358;)
                    </small>
              {loading ? <Skeleton /> : <h5>{formatShortNumber(totalCommissions)}</h5>}
            </MDBCol>
            <MDBCol lg="2" md="2" sm="6">
              <small className="grey-text">Today</small>
              {loading ? <Skeleton /> : <h5>{formatShortNumber(commissionsToday)}</h5>}
            </MDBCol>
            <MDBCol lg="3" md="3" sm="6">
              <small className="grey-text">Last week</small>
              {loading ? <Skeleton /> : <h5>{formatShortNumber(commissionsLastWeek)}</h5>}
            </MDBCol>
            <MDBCol lg="3" md="3" sm="6">
              <small className="grey-text">Last Month</small>
              {loading ? <Skeleton /> : <h5>{formatShortNumber(commissionsLastMonth)}</h5>}
            </MDBCol>
          </MDBRow>

          <MDBRow className="mb-1">
            <MDBCol lg="4" md="4" sm="6">
              <small className="grey-text">
                Total Transactions(&#8358;)
              </small>{loading ? <Skeleton /> : <h5>{formatShortNumber(totalTransactions)}</h5>}
            </MDBCol>
            <MDBCol lg="2" md="2" sm="6">
              <small className="grey-text">Today</small>
              {loading ? <Skeleton /> : <h5>{formatShortNumber(transactionsToday)}</h5>}
            </MDBCol>
            <MDBCol lg="3" md="3" sm="6">
              <small className="grey-text">Last week</small>
              {loading ? <Skeleton /> : <h5>{formatShortNumber(transactionsLastWeek)}</h5>}
            </MDBCol>
            <MDBCol lg="3" md="3" sm="6">
              <small className="grey-text">Last Month</small>
              {loading ? <Skeleton /> : <h5>{formatShortNumber(transactionsLastMonth)}</h5>}
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
}

export default AppStatistics;