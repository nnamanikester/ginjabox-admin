import React from 'react';
import {
  MDBCol,
  MDBCardBody,
  MDBCard,
  MDBRow,
  MDBCardHeader
} from "mdbreact"

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
              <h5>365k</h5>
            </MDBCol>
            <MDBCol lg="2" md="2" sm="6">
              <small className="grey-text">Today</small>
              <h5>67</h5>
            </MDBCol>
            <MDBCol lg="3" md="3" sm="6">
              <small className="grey-text">Last week</small>
              <h5>103</h5>
            </MDBCol>
            <MDBCol lg="3" md="3" sm="6">
              <small className="grey-text">Last Month</small>
              <h5>745</h5>
            </MDBCol>
          </MDBRow>

          <MDBRow className="mb-1">
            <MDBCol lg="4" md="4" sm="6">
              <small className="grey-text">Available Warehouse</small>
              <h5>95</h5>
            </MDBCol>
            <MDBCol lg="2" md="2" sm="6">
              <small className="grey-text">Today</small>
              <h5>95</h5>
            </MDBCol>
            <MDBCol lg="3" md="3" sm="6">
              <small className="grey-text">Last week</small>
              <h5>127</h5>
            </MDBCol>
            <MDBCol lg="3" md="3" sm="6">
              <small className="grey-text">Last Month</small>
              <h5>374</h5>
            </MDBCol>
          </MDBRow>

          <MDBRow className="mb-1">
            <MDBCol lg="4" md="4" sm="6">
              <small className="grey-text">
                Total Commissions(&#8358;)
                    </small>
              <h5>365m</h5>
            </MDBCol>
            <MDBCol lg="2" md="2" sm="6">
              <small className="grey-text">Today</small>
              <h5>273k</h5>
            </MDBCol>
            <MDBCol lg="3" md="3" sm="6">
              <small className="grey-text">Last week</small>
              <h5>1.5m</h5>
            </MDBCol>
            <MDBCol lg="3" md="3" sm="6">
              <small className="grey-text">Last Month</small>
              <h5>22m</h5>
            </MDBCol>
          </MDBRow>

          <MDBRow className="mb-1">
            <MDBCol lg="4" md="4" sm="6">
              <small className="grey-text">
                Total Transactions(&#8358;)
                    </small>
              <h5>365m</h5>
            </MDBCol>
            <MDBCol lg="2" md="2" sm="6">
              <small className="grey-text">Today</small>
              <h5>273k</h5>
            </MDBCol>
            <MDBCol lg="3" md="3" sm="6">
              <small className="grey-text">Last week</small>
              <h5>1.5m</h5>
            </MDBCol>
            <MDBCol lg="3" md="3" sm="6">
              <small className="grey-text">Last Month</small>
              <h5>22m</h5>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
}

export default AppStatistics;