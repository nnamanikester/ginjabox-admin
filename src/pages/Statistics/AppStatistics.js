import React from 'react';
import {
  MDBCol,
  MDBCardBody,
  MDBCard,
  MDBRow,
  MDBCardHeader
} from "mdbreact"
import { formatShortNumber } from "../../functions";

const AppStatistics = () => {
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
              <h5>{formatShortNumber(3004564)}</h5>
            </MDBCol>
            <MDBCol lg="2" md="2" sm="6">
              <small className="grey-text">Today</small>
              <h5>67</h5>
            </MDBCol>
            <MDBCol lg="3" md="3" sm="6">
              <small className="grey-text">Last week</small>
              <h5>{formatShortNumber(345)}</h5>
            </MDBCol>
            <MDBCol lg="3" md="3" sm="6">
              <small className="grey-text">Last Month</small>
              <h5>{formatShortNumber(754)}</h5>
            </MDBCol>
          </MDBRow>

          <MDBRow className="mb-1">
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
          </MDBRow>

          <MDBRow className="mb-1">
            <MDBCol lg="4" md="4" sm="6">
              <small className="grey-text">
                Total Commissions(&#8358;)
                    </small>
              <h5>{formatShortNumber(3653456)}</h5>
            </MDBCol>
            <MDBCol lg="2" md="2" sm="6">
              <small className="grey-text">Today</small>
              <h5>{formatShortNumber(273345)}</h5>
            </MDBCol>
            <MDBCol lg="3" md="3" sm="6">
              <small className="grey-text">Last week</small>
              <h5>{formatShortNumber(1500564)}</h5>
            </MDBCol>
            <MDBCol lg="3" md="3" sm="6">
              <small className="grey-text">Last Month</small>
              <h5>{formatShortNumber(22000000)}</h5>
            </MDBCol>
          </MDBRow>

          <MDBRow className="mb-1">
            <MDBCol lg="4" md="4" sm="6">
              <small className="grey-text">
                Total Transactions(&#8358;)
                    </small>
              <h5>{formatShortNumber(34654736486)}</h5>
            </MDBCol>
            <MDBCol lg="2" md="2" sm="6">
              <small className="grey-text">Today</small>
              <h5>{formatShortNumber(2737637)}</h5>
            </MDBCol>
            <MDBCol lg="3" md="3" sm="6">
              <small className="grey-text">Last week</small>
              <h5>{formatShortNumber(15004553)}</h5>
            </MDBCol>
            <MDBCol lg="3" md="3" sm="6">
              <small className="grey-text">Last Month</small>
              <h5>{formatShortNumber(220009998)}</h5>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
}

export default AppStatistics;