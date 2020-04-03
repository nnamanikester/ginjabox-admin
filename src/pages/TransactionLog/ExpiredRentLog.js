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
      label: "Listing ID",
      field: "listingId",
    },
    {
      label: "Amount",
      field: "amount",
    },
    {
      label: "Date Purchased",
      field: "datePurchased",
    },
    {
      label: "Date Expired",
      field: "dateExpired",
    }
  ],
  rows: [
    {
      sn: "1",
      listingId: "876483hu384989G94",
      amount: "300,000",
      datePurchased: "2020/01/04",
      dateExpired: "2020/03/23"
    },
    {
      sn: "2",
      listingId: "876483hu384989G94",
      amount: "300,000",
      datePurchased: "2020/01/04",
      dateExpired: "2020/03/23"
    },
    {
      sn: "3",
      listingId: "876483hu384989G94",
      amount: "300,000",
      datePurchased: "2020/01/04",
      dateExpired: "2020/03/23"
    }
  ]
};


const ExpiredRentLog = () => {
  return (
    <MDBContainer>
      <MDBCard>
        <MDBCard narrow className="z-depth-0">
          <MDBView
            cascade
            className="teal accent-4 narrower py-2 my-3 d-flex justify-content-between align-items-center"
          >
            <div className="text-left"></div>
            <span className="white-text text-bold mx-3">Expired Rent Log</span>
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

export default ExpiredRentLog;
