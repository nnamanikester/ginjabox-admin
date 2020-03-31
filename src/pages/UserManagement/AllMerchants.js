/* 
* List of all users that are also merchants are diplayed here
* When you click to view the transactions. It brings up a list
* having the transactions log by that particular user.
*/
import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBContainer,
  MDBDataTable,
  MDBView,
  MDBLink
} from "mdbreact";

const data = {
  columns: [
    {
      label: "S/N",
      field: "sn",
    },
    {
      label: "Name",
      field: "name",
    },
    {
      label: "Transactions",
      field: "transactions",
    },
    {
      label: "Phone",
      field: "phone",
    },
    {
      label: "Email",
      field: "email",
    },
    {
      label: "Action",
      field: "action",
    }
  ],
  rows: [
    {
      sn: "1",
      name: "Gloria Little",
      trasnactions: "7",
      phone: "+234984077364",
      email: "email@gmial.com",
      action: <MDBLink to="/user/username">View trasnactions</MDBLink>
    },
    {
      sn: "2",
      name: "Eze Nwafor",
      trasnactions: "13",
      phone: "+234818483344",
      email: "email@gmial.com",
      action: <MDBLink to="/user/username">View trasnactions</MDBLink>
    }
  ]
};

const AllWarehouser = () => {
  return (
    <MDBContainer>
      <MDBCard>
        <MDBCard narrow className="z-depth-0">
          <MDBView
            cascade
            className="gradient-card-header blue-gradient narrower py-2 my-3 d-flex justify-content-between align-items-center"
          >
            <div className="text-left"></div>
            <span className="white-text text-bold mx-3">All Warehousers</span>
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

export default AllWarehouser;
