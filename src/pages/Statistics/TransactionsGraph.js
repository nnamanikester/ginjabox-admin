import React, { useState, useEffect } from 'react';
import axios from "axios";
import { apiUrl } from "../../config";
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

const TransactionGraph = ({ LineOptions }) => {
  const [data, setData] = useState([]);
  const [labels, setLabels] = useState([]);

  const transactionStatistics = {
    labels: labels.reverse(),
    datasets: [
      {
        label: 'Transactions',
        data: data.reverse(),
        backgroundColor: '#0900',
        borderColor: ['rgba(0,230,0)'],
        borderWidth: 2,
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
      }
    ]
  };

  const handleSelect = (val) => {
    let api = '';
    if (parseInt(val) === 1) api = `${apiUrl}/statistics/transactions-graph-week`;
    if (parseInt(val) === 2) api = `${apiUrl}/statistics/transactions-graph-month`;
    setLabels([]);
    setData([]);

    axios.get(api, {
      headers: { "x-admin-auth": localStorage.getItem('token') }
    })
      .then(res => {
        const dat = res.data.data.map(item => {
          setData([...data, item.data]);;
          return item.label;
        })
        setLabels([...labels, ...dat])
      })
      .catch(err => {
        return err;
      })
  }

  const loadTransactionsGraph = () => {
    axios.get(`${apiUrl}/statistics/transactions-graph-week`, {
      headers: { "x-admin-auth": localStorage.getItem('token') }
    })
      .then(res => {
        const dat = res.data.data.map(item => {
          setData([...data, item.data]);;
          return item.label;
        })
        setLabels([...labels, ...dat])
      })
      .catch(err => {
        return err;
      })
  }

  useEffect(() => {
    loadTransactionsGraph();
  }, [])

  return (
    <MDBCol md='12' lg='12'>
      <MDBCard narrow className='mb-4'>
        <MDBCardHeader className="teal accent-4 text-white">
          Transactions Statistics
        </MDBCardHeader>
        <MDBCardBody>
          <MDBCol md='12'>
            <p className='lead'>
              <span className='badge teal accent-4 p-2'>Data range</span>
            </p>
            <MDBSelect getValue={(val) => handleSelect(val)}>
              <MDBSelectInput selected='Last 7 days' />
              <MDBSelectOptions>
                <MDBSelectOption value='1'>Last 7 days</MDBSelectOption>
                <MDBSelectOption value='2'>Last 30 days</MDBSelectOption>
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