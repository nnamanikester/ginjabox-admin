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
      label: "Referrer ID",
      field: "referrer",
    },
    {
      label: "Referred ID",
      field: "referred",
    },
    {
      label: "Date Joined",
      field: "date",
    }
  ],
  rows: [
    {
      sn: "1",
      referrer: "34ujyG7G45",
      referred: "7dg7HHD438",
      date: "2020/03/02",
    },
    {
      sn: "2",
      referrer: "34ujyG7G45",
      referred: "7dg7HHD438",
      date: "2020/03/02"
    },
  ]
};

const ReferralLog = () => {
  return (
    <MDBContainer>
      <MDBCard>
        <MDBCard narrow className="z-depth-0">
          <MDBView
            cascade
            className="gradient-card-header blue-gradient narrower py-2 my-3 d-flex justify-content-between align-items-center"
          >
            <div className="text-left"></div>
            <span className="white-text text-bold mx-3">Referral Log</span>
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

export default ReferralLog;
