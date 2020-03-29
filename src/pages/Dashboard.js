import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBIcon,
  MDBProgress,
  MDBBtn,
  MDBTable,
  MDBDropdownMenu,
  MDBDropdownItem
} from "mdbreact";
import { Bar, Doughnut } from "react-chartjs-2";

const mobileChartData = {
  labels: ["Android", "IOS", "Others"],
  datasets: [
    {
      data: [240, 50, 130],
      backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"],
      hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870"]
    }
  ]
};

const mobileChartOptions = {
  responsive: true,
  maintainAspectRatio: true,
  legend: {
    labels: {
      fontColor: "black"
    }
  }
};

const Dashboard = () => {
  return (
    <MDBContainer fluid className="mb-5">
      <section>
        <MDBRow>
          <MDBCol xl="3" md="6" className="mb-4">
            <MDBCard cascade className="cascading-admin-card">
              <div className="admin-up">
                <MDBIcon icon="users" className="primary-color" />
                <div className="data">
                  <p>Total Users</p>
                  <h5 className="font-weight-bold dark-grey-text">571</h5>
                </div>
              </div>
              <MDBCardBody cascade>
                <MDBProgress
                  value={25}
                  barClassName="bg-primary"
                  height="6px"
                  wrapperStyle={{ opacity: ".7" }}
                  className="mb-3"
                />
                <p className="card-text">Better than last week (25%)</p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol xl="3" md="6" className="mb-4">
            <MDBCard cascade className="cascading-admin-card">
              <div className="admin-up">
                <MDBIcon icon="exchange-alt" className="success-color" />
                <div className="data">
                  <p>Total Transactions</p>
                  <h5 className="font-weight-bold dark-grey-text">375</h5>
                </div>
              </div>
              <MDBCardBody cascade>
                <MDBProgress
                  value={25}
                  barClassName="red accent-2"
                  height="6px"
                  wrapperStyle={{ opacity: ".7" }}
                  className="mb-3"
                />
                <p className="card-text">Worse than last week (25%)</p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol xl="3" md="6" className="mb-4">
            <MDBCard cascade className="cascading-admin-card">
              <div className="admin-up">
                <MDBIcon icon="dollar-sign" className="success-color" />
                <div className="data">
                  <p>Total Commissions</p>
                  <h5 className="font-weight-bold dark-grey-text">
                    &#8358; 213 343 479
                  </h5>
                </div>
              </div>
              <MDBCardBody cascade>
                <MDBProgress
                  value={75}
                  barClassName="red accent-2"
                  height="6px"
                  wrapperStyle={{ opacity: ".7" }}
                  className="mb-3"
                />
                <p className="card-text">Worse than last week (75%)</p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol xl="3" md="6" className="mb-4">
            <MDBCard cascade className="cascading-admin-card">
              <div className="admin-up">
                <MDBIcon icon="home" className="primary-color" />
                <div className="data">
                  <p>Available Warehouse</p>
                  <h5 className="font-weight-bold dark-grey-text">67</h5>
                </div>
              </div>
              <MDBCardBody cascade>
                <MDBProgress
                  value={25}
                  barClassName="bg-primary"
                  height="6px"
                  wrapperStyle={{ opacity: ".7" }}
                  className="mb-3"
                />
                <p className="card-text">Better than last week (25%)</p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </section>

      <section>
        <MDBRow>
          <MDBCol lg="6" md="12">
            <MDBCard className="mb-4">
              <MDBCardHeader className="primary-color text-white">
                App Statistics
              </MDBCardHeader>
              <MDBCardBody>
                <MDBRow className="mb-1">
                  <MDBCol lg="4" md="4">
                    <small className="grey-text">Total Signups</small>
                    <h5>365k</h5>
                  </MDBCol>
                  <MDBCol lg="2" md="2">
                    <small className="grey-text">Today</small>
                    <h5>67</h5>
                  </MDBCol>
                  <MDBCol lg="3" md="3">
                    <small className="grey-text">Last week</small>
                    <h5>103</h5>
                  </MDBCol>
                  <MDBCol lg="3" md="3">
                    <small className="grey-text">Last Month</small>
                    <h5>745</h5>
                  </MDBCol>
                </MDBRow>

                <MDBRow className="mb-1">
                  <MDBCol lg="4" md="4">
                    <small className="grey-text">Available Warehouse</small>
                    <h5>95</h5>
                  </MDBCol>
                  <MDBCol lg="2" md="2">
                    <small className="grey-text">Today</small>
                    <h5>95</h5>
                  </MDBCol>
                  <MDBCol lg="3" md="3">
                    <small className="grey-text">Last week</small>
                    <h5>127</h5>
                  </MDBCol>
                  <MDBCol lg="3" md="3">
                    <small className="grey-text">Last Month</small>
                    <h5>374</h5>
                  </MDBCol>
                </MDBRow>

                <MDBRow className="mb-1">
                  <MDBCol lg="4" md="4">
                    <small className="grey-text">
                      Total Commissions(&#8358;)
                    </small>
                    <h5>365m</h5>
                  </MDBCol>
                  <MDBCol lg="2" md="2">
                    <small className="grey-text">Today</small>
                    <h5>273k</h5>
                  </MDBCol>
                  <MDBCol lg="3" md="3">
                    <small className="grey-text">Last week</small>
                    <h5>1.5m</h5>
                  </MDBCol>
                  <MDBCol lg="3" md="3">
                    <small className="grey-text">Last Month</small>
                    <h5>22m</h5>
                  </MDBCol>
                </MDBRow>

                <MDBRow className="mb-1">
                  <MDBCol lg="4" md="4">
                    <small className="grey-text">
                      Total Transactions(&#8358;)
                    </small>
                    <h5>365m</h5>
                  </MDBCol>
                  <MDBCol lg="2" md="2">
                    <small className="grey-text">Today</small>
                    <h5>273k</h5>
                  </MDBCol>
                  <MDBCol lg="3" md="3">
                    <small className="grey-text">Last week</small>
                    <h5>1.5m</h5>
                  </MDBCol>
                  <MDBCol lg="3" md="3">
                    <small className="grey-text">Last Month</small>
                    <h5>22m</h5>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol lg="6" md="12">
            <MDBCard className="mb-4">
              <MDBCardHeader className="primary-color text-white">
                Users By OS
              </MDBCardHeader>
              <MDBCardBody>
                <Doughnut
                  data={mobileChartData}
                  options={mobileChartOptions}
                  height={135}
                />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol lg="6" md="12">
            <MDBCard className="mb-4">
              <MDBCardHeader className="primary-color text-white">
                Notifications
              </MDBCardHeader>
              <MDBCardBody>
                <MDBDropdownItem href="#!">
                  <MDBIcon icon="money-bill-alt" className="mr-2" />
                  New order received
                  <span className="float-right">
                    <MDBIcon icon="clock" /> 13 min
                  </span>
                  <span>this is some descriptions</span>
                </MDBDropdownItem>
                <MDBBtn
                  flat
                  rounded
                  className="grey lighten-3 float-right font-weight-bold dark-grey-text"
                >
                  View full report
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol lg="6" md="12">
            <MDBCard className="mb-4">
              <MDBCardHeader className="primary-color text-white">
                Issues
              </MDBCardHeader>
              <MDBCardBody>
                <MDBTable className="no-header mt-1">
                  <thead>
                    <tr>
                      <th className="font-weight-bold dark-grey-text">
                        Status
                      </th>
                      <th className="font-weight-bold dark-grey-text">Title</th>
                      <th className="font-weight-bold dark-grey-text">User</th>
                      <th className="font-weight-bold dark-grey-text">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <span className="badge green">Open</span>
                      </td>
                      <td>Lorem ipsum dolor</td>
                      <td>John Doe</td>
                      <td className="hour">
                        <small>
                          <span className="grey-text">
                            <i className="far fa-clock" aria-hidden="true" /> 12
                            min
                          </span>
                        </small>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="badge green">Open</span>
                      </td>
                      <td>Lorem ipsum dolor</td>
                      <td>John Doe</td>
                      <td className="hour">
                        <small>
                          <span className="grey-text">
                            <i className="far fa-clock" aria-hidden="true" /> 12
                            min
                          </span>
                        </small>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="badge warning-color">In progress</span>
                      </td>
                      <td>Lorem ipsum dolor</td>
                      <td>John Doe</td>
                      <td className="hour">
                        <small>
                          <span className="grey-text">
                            <i className="far fa-clock" aria-hidden="true" /> 12
                            min
                          </span>
                        </small>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="badge red">Closed</span>
                      </td>
                      <td>Lorem ipsum dolor</td>
                      <td>John Doe</td>
                      <td className="hour">
                        <small>
                          <span className="grey-text">
                            <i className="far fa-clock" aria-hidden="true" /> 12
                            min
                          </span>
                        </small>
                      </td>
                    </tr>
                  </tbody>
                </MDBTable>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol lg="6" md="12">
            <MDBCard
              color="red accent-2"
              className="text-center mb-4 py-3 text-white"
            >
              <MDBIcon icon="bell" size="3x" className="mb-3" />
              <h4 className="h4-responsive">28 important messages</h4>
            </MDBCard>

            <section className="mt-lg-5">
              <MDBRow>
                <MDBCol md="6" className="mb-4">
                  <MDBCard>
                    <MDBCardHeader color="grey darken-1">Orders</MDBCardHeader>
                    <h6 className="ml-4 pt-4 mt-1 dark-grey-text font-weight-bold">
                      <MDBIcon
                        icon="long-arrow-alt-up"
                        className="blue-text mr-3"
                        aria-hidden="true"
                      />{" "}
                      2000
                    </h6>
                    <MDBCardBody>
                      <MDBProgress
                        value={45}
                        barClassName="bg-primary"
                        height="6px"
                      />
                      <p className="font-small grey-text">
                        Better than last week (25%)
                      </p>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>

                <MDBCol md="6" className="mb-4">
                  <MDBCard>
                    <MDBCardHeader color="warning-color">
                      Monthly Sales
                    </MDBCardHeader>
                    <h6 className="ml-4 pt-4 mt-1 dark-grey-text font-weight-bold">
                      <MDBIcon
                        icon="long-arrow-alt-up"
                        className="blue-text mr-3"
                        aria-hidden="true"
                      />
                      $ 2000
                    </h6>
                    <MDBCardBody>
                      <MDBProgress
                        value={65}
                        barClassName="bg-primary"
                        height="6px"
                      />
                      <p className="font-small grey-text">
                        Better than last week (25%)
                      </p>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </section>
          </MDBCol>
        </MDBRow>
      </section>
    </MDBContainer>
  );
};

export default Dashboard;
