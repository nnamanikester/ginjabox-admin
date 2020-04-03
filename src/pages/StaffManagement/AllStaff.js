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
      label: "Name",
      field: "name"
    },
    {
      label: "Email",
      field: "email"
    },
    {
      label: "Phone",
      field: "phone"
    },
    {
      label: "Role",
      field: "role"
    },
    {
      label: "Created At",
      field: "createdAt"
    },
    {
      label: "Action",
      field: "action"
    }
  ],
  rows: [
    {
      sn: 1,
      name: "John Kester",
      email: "email@email.com",
      phone: "+234908348293",
      role: "Super Admin",
      createdAt: "2020/04/10",
      action: <div><a href="#!">Ban</a><a href="#!">Delete</a></div>
    },
    {
      sn: 2,
      name: "Kingsley Whitegod",
      email: "email@email.com",
      phone: "+234908348293",
      role: "Management",
      createdAt: "2020/04/10",
      action: <div><a href="#!">Ban</a><a href="#!">Delete</a></div>
    },
    {
      sn: 3,
      name: "Ezeh Chisom",
      email: "email@email.com",
      phone: "+234908348293",
      role: "Support",
      createdAt: "2020/04/10",
      action: <div><a href="#!">Ban</a><a href="#!">Delete</a></div>
    },
    {
      sn: 4,
      name: "Kingsley Whitegod",
      email: "email@email.com",
      phone: "+234908348293",
      role: "Management",
      createdAt: "2020/04/10",
      action: <div><a href="#!">Ban</a><a href="#!">Delete</a></div>
    },
    {
      sn: 5,
      name: "Nwagu Victor",
      email: "email@email.com",
      phone: "+234908348293",
      role: "Team Lead",
      createdAt: "2020/04/10",
      action: <div><a href="#!">Ban</a><a href="#!">Delete</a></div>
    },
    {
      sn: 6,
      name: "Ezeh Chisom",
      email: "email@email.com",
      phone: "+234908348293",
      role: "Support",
      createdAt: "2020/04/10",
      action: <div><a href="#!">Ban</a><a href="#!">Delete</a></div>
    },
    {
      sn: 7,
      name: "Nwagu Victor",
      email: "email@email.com",
      phone: "+234908348293",
      role: "Team Lead",
      createdAt: "2020/04/10",
      action: <div><a href="#!">Ban</a><a href="#!">Delete</a></div>
    }
  ]
};

const AllStaff = () => {
  return (
    <MDBContainer>
      <MDBCard>
        <MDBCard narrow className="z-depth-0">
          <MDBView
            cascade
            className="teal accent-4 narrower py-2 my-3 d-flex justify-content-between align-items-center"
          >
            <div className="text-left"></div>
            <span className="white-text text-bold mx-3">All Staff</span>
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

export default AllStaff;
