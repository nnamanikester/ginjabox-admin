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
  MDBCardHeader
} from "mdbreact"
import { Line } from "react-chartjs-2";

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

const AvailableWarehouseGraph = ({ LineOptions }) => {
  return (
    <MDBCol md='12' lg='12'>
      <MDBCard narrow className='mb-4'>
        <MDBCardHeader className="teal accent-4 text-white">
          Available Warehouse Statistics
              </MDBCardHeader>
        <MDBCardBody>
          <MDBCol md='12'>
            <p className='lead'>
              <span className='badge teal accent-4 p-2'>Data range</span>
            </p>
            <MDBSelect>
              <MDBSelectInput selected='Choose time period' />
              <MDBSelectOptions>
                <MDBSelectOption value='1'>Last 7 days</MDBSelectOption>
                <MDBSelectOption value='2'>Last 30 days</MDBSelectOption>
              </MDBSelectOptions>
            </MDBSelect>
          </MDBCol>
          <MDBView className='gradient-card-header teal accent-4 px-3'>
            <Line
              data={availableWarehouseStatistics}
              options={LineOptions}
              height={150}
            />
          </MDBView>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
}

export default AvailableWarehouseGraph;