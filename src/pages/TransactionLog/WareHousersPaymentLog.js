import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBContainer,
  MDBDataTable,
  MDBView
} from "mdbreact";

const data = {
  columns: [
    {
      label: "S/N",
      field: "sn",
    },
    {
      label: "Payment ID",
      field: "paymentId",
    },
    {
      label: "User ID",
      field: "userId",
    },
    {
      label: "Amount",
      field: "amount",
    },
    {
      label: "Date",
      field: "date",
    }
  ],
  rows: [
    {
      sn: "1",
      paymentId: "34ujyG7G45",
      userId: "348HYYuQ9241j",
      amount: "200,000",
      date: "2020/03/02"
    },
    {
      sn: "2",
      paymentId: "34ujyG7G45",
      userId: "348HYYuQ9241j",
      amount: "200,000",
      date: "2020/03/02"
    },
  ]
};

const WareHousersPaymentLog = () => {
  return (
    <MDBContainer>
      <MDBCard>
        <MDBCard narrow className="z-depth-0">
          <MDBView
            cascade
            className="teal accent-4 narrower py-2 my-3 d-flex justify-content-between align-items-center"
          >
            <div className="text-left"></div>
            <span className="white-text text-bold mx-3">
              Warehousers' Payment Log
            </span>
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

export default WareHousersPaymentLog;
