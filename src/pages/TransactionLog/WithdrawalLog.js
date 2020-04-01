import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBContainer,
  MDBDataTable,
  MDBView,
  MDBBadge
} from "mdbreact";

const data = {
  columns: [
    {
      label: "S/N",
      field: "sn",
    },
    {
      label: "Transaction ID",
      field: "transactionId",
    },
    {
      label: "User Name",
      field: "userName",
    },
    {
      label: "User Email",
      field: "userEmail",
    },
    {
      label: "Amount",
      field: "amount",
    },
    {
      label: "Status",
      field: "status",
    },
    {
      label: "Date",
      field: "date",
    }
  ],
  rows: [
    {
      sn: "1",
      transactionId: "876483hu384989G94",
      userName: "John Kester",
      userEmail: "email@email.com",
      amount: "20,000",
      status: <MDBBadge color="success">Paid</MDBBadge>,
      date: "2020/03/25"
    },
    {
      sn: "2",
      transactionId: "876483hu384989G94",
      userName: "John Kester",
      userEmail: "email@email.com",
      amount: "15,000",
      status: <MDBBadge color="warning">pending</MDBBadge>,
      date: "2020/03/25"
    },
    {
      sn: "3",
      transactionId: "876483hu384989G94",
      userName: "John Kester",
      userEmail: "email@email.com",
      amount: "23,000",
      status: <MDBBadge color="danger">declined</MDBBadge>,
      date: "2020/03/25"
    }
  ]
};

const WithdrawalLog = () => {
  return (
    <MDBContainer>
      <MDBCard>
        <MDBCard narrow className="z-depth-0">
          <MDBView
            cascade
            className="gradient-card-header blue-gradient narrower py-2 my-3 d-flex justify-content-between align-items-center"
          >
            <div className="text-left"></div>
            <span className="white-text text-bold mx-3">Withdrawal Log</span>
            <div className="text-right"></div>
          </MDBView>
        </MDBCard>
        <MDBCardBody>
          <MDBDataTable striped responsive bordered small hover data={data} />
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};

export default WithdrawalLog;
