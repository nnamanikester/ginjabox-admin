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
      field: "sn"
    },
    {
      label: "Role Name",
      field: "roleName"
    },
    {
      label: "Date Created",
      field: "dateCreated"
    },
    {
      label: "Action",
      field: "action"
    }
  ],
  rows: [
    {
      sn: "1",
      roleName: "Super Admin",
      dateCreated: "2009/04/10",
      action: <div><a href="#!">Delete</a></div>
    },
    {
      sn: "2",
      roleName: "Management",
      dateCreated: "2009/04/10",
      action: <div><a href="#!">Delete</a></div>
    },
    {
      sn: "3",
      roleName: "Support",
      dateCreated: "2009/04/10",
      action: <div><a href="#!">Delete</a></div>
    },
    {
      sn: "4",
      roleName: "Team Lead",
      dateCreated: "2009/04/10",
      action: <div><a href="#!">Delete</a></div>
    }
  ]
};

const RoleManagement = () => {
  return (
    <MDBContainer>
      <MDBCard>
        <MDBCard narrow className="z-depth-0">
          <MDBView
            cascade
            className="gradient-card-header blue-gradient narrower py-2 my-3 d-flex justify-content-between align-items-center"
          >
            <div className="text-left"></div>
            <span className="white-text text-bold mx-3">Role Management</span>
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

export default RoleManagement;
