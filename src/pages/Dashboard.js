import React from "react";
import Users from "./Statistics/Users";
import AppStatistics from "./Statistics/AppStatistics";
import AvailableWarehouseGraph from "./Statistics/AvailableWarehouseGraph";
import AvailableWarehouse from "./Statistics/AvailableWarehouse";
import Commissions from "./Statistics/Commissions";
import Transactions from "./Statistics/Transactions";
import TransactionsGraph from "./Statistics/TransactionsGraph";
import UsersByOs from "./Statistics/UsersByOs";
import UsersGraph from "./Statistics/UsersGraph";

import {
  MDBContainer,
  MDBRow
} from "mdbreact";

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

const Dashboard = (props) => {
  return (
    <MDBContainer fluid className="mb-5">
      <section>
        <MDBRow>
          <Users />
          <Transactions />
          <Commissions />
          <AvailableWarehouse />
        </MDBRow>
      </section >

      <section>
        <MDBRow>
          <AppStatistics />
          <UsersByOs />
          <TransactionsGraph LineOptions={LineOptions} />
          <AvailableWarehouseGraph LineOptions={LineOptions} />
          <UsersGraph LineOptions={LineOptions} />
        </MDBRow>
      </section>
    </MDBContainer >
  );
};

export default Dashboard;
