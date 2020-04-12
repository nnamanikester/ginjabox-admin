import React from 'react';
import {
  MDBCol,
  MDBCardBody,
  MDBCard,
  MDBSelect,
  MDBSelectInput,
  MDBSelectOption,
  MDBSelectOptions,
  MDBCardHeader,
  MDBView
} from "mdbreact"
import { Line } from "react-chartjs-2";

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

const TransactionGraph = ({ LineOptions }) => {
  return (
    <MDBCol md='12' lg='6'>
      <MDBCard narrow className='mb-4'>
        <MDBCardHeader className="teal accent-4 text-white">
          Transactions Statistics
              </MDBCardHeader>
        <MDBCardBody>
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
          <MDBView className='gradient-card-header teal accent-4 px-3'>
            <Line
              data={transactionStatistics}
              options={LineOptions}
              height={150}
            />
          </MDBView>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
}

export default TransactionGraph;