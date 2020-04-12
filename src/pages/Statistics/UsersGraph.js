import React from 'react';
import {
  MDBCol,
  MDBCardBody,
  MDBCard,
  MDBSelectOptions,
  MDBSelectOption,
  MDBSelectInput,
  MDBSelect,
  MDBView,
  MDBCardHeader,
  MDBRow,
  MDBTooltip,
  MDBIcon,
  MDBBtn
} from "mdbreact"
import { Line } from "react-chartjs-2";


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

const UsersGraph = ({ LineOptions }) => {
  return (
    <MDBCol lg='12' md="12">
      <MDBCard cascade narrow className="mb-4">
        <MDBCardHeader className="teal accent-4 text-white">
          Users Statistics
              </MDBCardHeader>
        <MDBRow>
          <MDBCol className='mr-0'>
            <MDBCardBody cascade className='pb-0'>
              <MDBCardBody className='row pt-3'>
                <MDBCol md='12'>
                  <p className='lead'>
                    <span className='badge teal accent-4 p-2'>Data range</span>
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
                      <MDBBtn className='teal accent-4 btn-sm p-2 d-inline'>
                        <MDBIcon icon='question' />
                      </MDBBtn>
                      <div>Registered users today</div>
                    </MDBTooltip>
                  </div>
                  <br />

                  <div>
                    Daily Average: <strong>11</strong>
                    <MDBTooltip>
                      <MDBBtn className='teal accent-4 btn-sm p-2 d-inline'>
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
            <MDBView className='gradient-card-header teal accent-4 px-3'>
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
  );
}

export default UsersGraph;