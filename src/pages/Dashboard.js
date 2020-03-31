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
  MDBDropdownItem,
  MDBSelect,
  MDBSelectInput,
  MDBSelectOption,
  MDBSelectOptions,
  MDBTooltip,
  MDBView
} from "mdbreact";
import { Bar, Line, Doughnut } from "react-chartjs-2";

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


const transactionStatistics = {
  labels: ['Mar 24th', 'Mar 25th', 'Mar 26th', 'Mar 27th', 'Mar 28th', 'Mar 29th', 'Mar 30th',],
  datasets: [
    {
      label: 'Transactions',
      data: [33, 43, 302, 235, 127, 22, 13],
      backgroundColor: '#0900',
      borderColor: ['rgba(0,230,0)'],
      borderWidth: 2,
      pointBorderColor: '#fff',
      pointBorderWidth: 2,
    }
  ]
};

const availableWarehouseStatistics = {
  labels: ['Mar 24th', 'Mar 25th', 'Mar 26th', 'Mar 27th', 'Mar 28th', 'Mar 29th', 'Mar 30th'],
  datasets: [
    {
      label: 'Available Warehouses',
      data: [655, 302, 735, 127, 22, 13, 46],
      backgroundColor: '#0900',
      borderColor: ['rgba(200,200,200)'],
      borderWidth: 2,
      pointBorderColor: '#fff',
      pointBorderWidth: 2,
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

const userStatistics = {
  labels: ['Mar 24th', 'Mar 25th', 'Mar 26th', 'Mar 27th', 'Mar 28th', 'Mar 29th', 'Mar 30th'],
  datasets: [
    {
      label: 'Active Users',
      backgroundColor: 'rgba(0,255,0,0)',
      borderColor: 'rgba(0,230,0)',
      pointBackgroundColor: 'transparent',
      borderWidth: 2,
      pointBorderColor: '#fff',
      pointBorderWidth: 2,
      data: [540, 231, 513, 224, 113, 196, 110]
    },
    {
      label: 'Inactive Users',
      backgroundColor: 'rgba(200,200,200,0)',
      borderColor: 'rgba(200,200,200)',
      pointBackgroundColor: 'transparent',
      borderWidth: 2,
      pointBorderColor: '#fff',
      pointBorderWidth: 2,
      data: [300, 454, 223, 104, 193, 332, 150]
    }
  ]
};

const LineOptions = {
  responsive: true,
  maintainAspectRatio: true,
  legend: {
    labels: {
      fontColor: 'white',
      fontSize: 18
    }
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          display: false,
          color: 'rgba(255, 255, 255, 0.2)'
        },
        ticks: {
          fontColor: '#fff',
          fontSize: 10
        }
      }
    ],
    yAxes: [
      {
        gridLines: {
          display: true,
          color: 'rgba(255, 255, 255, 0.2)'
        },
        ticks: {
          fontColor: '#fff'
        }
      }
    ]
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
      </section >

      <section>
        <MDBRow>
          <MDBCol lg="6" md="12">
            <MDBCard className="mb-4">
              <MDBCardHeader className="primary-color text-white">
                App Statistics
              </MDBCardHeader>
              <MDBCardBody>
                <MDBRow className="mb-1">
                  <MDBCol lg="4">
                    <small className="grey-text">Total Signups</small>
                    <h5>365k</h5>
                  </MDBCol>
                  <MDBCol lg="2" >
                    <small className="grey-text">Today</small>
                    <h5>67</h5>
                  </MDBCol>
                  <MDBCol lg="3">
                    <small className="grey-text">Last week</small>
                    <h5>103</h5>
                  </MDBCol>
                  <MDBCol lg="3">
                    <small className="grey-text">Last Month</small>
                    <h5>745</h5>
                  </MDBCol>
                </MDBRow>

                <MDBRow className="mb-1">
                  <MDBCol lg="4">
                    <small className="grey-text">Available Warehouse</small>
                    <h5>95</h5>
                  </MDBCol>
                  <MDBCol lg="2">
                    <small className="grey-text">Today</small>
                    <h5>95</h5>
                  </MDBCol>
                  <MDBCol lg="3">
                    <small className="grey-text">Last week</small>
                    <h5>127</h5>
                  </MDBCol>
                  <MDBCol lg="3">
                    <small className="grey-text">Last Month</small>
                    <h5>374</h5>
                  </MDBCol>
                </MDBRow>

                <MDBRow className="mb-1">
                  <MDBCol lg="4">
                    <small className="grey-text">
                      Total Commissions(&#8358;)
                    </small>
                    <h5>365m</h5>
                  </MDBCol>
                  <MDBCol lg="2">
                    <small className="grey-text">Today</small>
                    <h5>273k</h5>
                  </MDBCol>
                  <MDBCol lg="3">
                    <small className="grey-text">Last week</small>
                    <h5>1.5m</h5>
                  </MDBCol>
                  <MDBCol lg="3">
                    <small className="grey-text">Last Month</small>
                    <h5>22m</h5>
                  </MDBCol>
                </MDBRow>

                <MDBRow className="mb-1">
                  <MDBCol lg="4">
                    <small className="grey-text">
                      Total Transactions(&#8358;)
                    </small>
                    <h5>365m</h5>
                  </MDBCol>
                  <MDBCol lg="2" >
                    <small className="grey-text">Today</small>
                    <h5>273k</h5>
                  </MDBCol>
                  <MDBCol lg="3">
                    <small className="grey-text">Last week</small>
                    <h5>1.5m</h5>
                  </MDBCol>
                  <MDBCol lg="3">
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

          <MDBCol md='12' lg='6'>
            <MDBCard narrow className='mb-4'>
              <MDBCardHeader className="primary-color text-white">
                Transactions Statistics
              </MDBCardHeader>
              <MDBCardBody>
                <MDBCol md='12'>
                  <p className='lead'>
                    <span className='badge info-color p-2'>Data range</span>
                  </p>
                  <MDBSelect>
                    <MDBSelectInput selected='Choose time period' />
                    <MDBSelectOptions>
                      <MDBSelectOption disabled>Choose time period</MDBSelectOption>
                      <MDBSelectOption value='1'>Today</MDBSelectOption>
                      <MDBSelectOption value='2'>Yesterday</MDBSelectOption>
                      <MDBSelectOption value='3'>Last 7 days</MDBSelectOption>
                      <MDBSelectOption value='3'>Last 30 days</MDBSelectOption>
                    </MDBSelectOptions>
                  </MDBSelect>
                </MDBCol>
                <MDBView className='gradient-card-header blue px-3'>
                  <Line
                    data={transactionStatistics}
                    options={LineOptions}
                    height={150}
                  />
                </MDBView>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol md='12' lg='6'>
            <MDBCard narrow className='mb-4'>
              <MDBCardHeader className="primary-color text-white">
                Available Warehouse Statistics
              </MDBCardHeader>
              <MDBCardBody>
                <MDBCol md='12'>
                  <p className='lead'>
                    <span className='badge info-color p-2'>Data range</span>
                  </p>
                  <MDBSelect>
                    <MDBSelectInput selected='Choose time period' />
                    <MDBSelectOptions>
                      <MDBSelectOption disabled>Choose time period</MDBSelectOption>
                      <MDBSelectOption value='1'>Today</MDBSelectOption>
                      <MDBSelectOption value='2'>Yesterday</MDBSelectOption>
                      <MDBSelectOption value='3'>Last 7 days</MDBSelectOption>
                      <MDBSelectOption value='3'>Last 30 days</MDBSelectOption>
                    </MDBSelectOptions>
                  </MDBSelect>
                </MDBCol>
                <MDBView className='gradient-card-header blue px-3'>
                  <Line
                    data={availableWarehouseStatistics}
                    options={LineOptions}
                    height={150}
                  />
                </MDBView>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol lg='12' md="12">
            <MDBCard cascade narrow className="mb-4">
              <MDBCardHeader className="primary-color text-white">
                Users Statistics
              </MDBCardHeader>
              <MDBRow>
                <MDBCol className='mr-0'>
                  <MDBCardBody cascade className='pb-0'>
                    <MDBCardBody className='row pt-3'>
                      <MDBCol md='12'>
                        <p className='lead'>
                          <span className='badge info-color p-2'>Data range</span>
                        </p>
                        <MDBSelect>
                          <MDBSelectInput selected='Choose time period' />
                          <MDBSelectOptions>
                            <MDBSelectOption disabled>Choose time period</MDBSelectOption>
                            <MDBSelectOption value='1'>Today</MDBSelectOption>
                            <MDBSelectOption value='2'>Yesterday</MDBSelectOption>
                            <MDBSelectOption value='3'>Last 7 days</MDBSelectOption>
                            <MDBSelectOption value='3'>Last 30 days</MDBSelectOption>
                          </MDBSelectOptions>
                        </MDBSelect>
                      </MDBCol>

                      <MDBCol md='12' className='text-center'>
                        <div style={{ marginBottom: '0.5rem' }}>
                          Today: <strong>14</strong>
                          <MDBTooltip>
                            <MDBBtn color='info' className='btn-sm p-2 d-inline'>
                              <MDBIcon icon='question' />
                            </MDBBtn>
                            <div>Registered users today</div>
                          </MDBTooltip>
                        </div>
                        <br />

                        <div>
                          Daily Average: <strong>11</strong>
                          <MDBTooltip>
                            <MDBBtn color='info' className='btn-sm p-2 d-inline'>
                              <MDBIcon icon='question' />
                            </MDBBtn>
                            <div>Daily User Registeration Average</div>
                          </MDBTooltip>
                        </div>
                        <br />
                      </MDBCol>
                    </MDBCardBody>
                  </MDBCardBody>
                </MDBCol>

                <MDBCol xl='7' lg='12' className='my-4 mr-4'>
                  <MDBView className='gradient-card-header blue px-3'>
                    <Line
                      data={userStatistics}
                      options={LineOptions}
                      height={150}
                    />
                  </MDBView>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
          {/* More Items Here if you neef to add more */}
        </MDBRow>
      </section>
    </MDBContainer >
  );
};

export default Dashboard;
