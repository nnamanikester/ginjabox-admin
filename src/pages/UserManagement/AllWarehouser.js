/* 
* List of all users that are also warehousers are diplayed here
* When you click to view the warehouse listings. It brings up a
* having the listings by that particular user.
*/
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
      label: "Name",
      field: "name",
    },
    {
      label: "No of Warehouse",
      field: "warehouse",
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
      warehouse: "7",
      phone: "+234984073944",
      email: "email@gmial.com",
      action: <div><a href="#!">View Listings</a></div>
    },
    {
      sn: "2",
      name: "Godfrey Nwafor",
      warehouse: "13",
      phone: "+234818483344",
      email: "email@gmial.com",
      action: <div><a href="#!">View Listings</a></div>
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
