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
      label: "Name",
      field: "name",
      sort: "asc",
      width: 150
    },
    {
      label: "Position",
      field: "position",
      sort: "asc",
      width: 270
    },
    {
      label: "Office",
      field: "office",
      sort: "asc",
      width: 200
    },
    {
      label: "Age",
      field: "age",
      sort: "asc",
      width: 100
    },
    {
      label: "Start date",
      field: "date",
      sort: "asc",
      width: 150
    },
    {
      label: "Salary",
      field: "salary",
      sort: "asc",
      width: 100
    }
  ],
  rows: [
    {
      name: "Gloria Little",
      position: "Systems Administrator",
      office: "New York",
      age: "59",
      date: "2009/04/10",
      salary: "$237"
    },
    {
      name: "Bradley Greer",
      position: "Software Engineer",
      office: "London",
      age: "41",
      date: "2012/10/13",
      salary: "$132"
    },
    {
      name: "Dai Rios",
      position: "Personnel Lead",
      office: "Edinburgh",
      age: "35",
      date: "2012/09/26",
      salary: "$217"
    },
    {
      name: "Suki Burks",
      position: "Developer",
      office: "London",
      age: "53",
      date: "2009/10/22",
      salary: "$114"
    },
    {
      name: "Prescott Bartlett",
      position: "Technical Author",
      office: "London",
      age: "27",
      date: "2011/05/07",
      salary: "$145"
    },
    {
      name: "Gavin Cortez",
      position: "Team Leader",
      office: "San Francisco",
      age: "22",
      date: "2008/10/26",
      salary: "$235"
    },
    {
      name: "Martena Mccray",
      position: "Post-Sales support",
      office: "Edinburgh",
      age: "46",
      date: "2011/03/09",
      salary: "$324"
    },
    {
      name: "Unity Butler",
      position: "Marketing Designer",
      office: "San Francisco",
      age: "47",
      date: "2009/12/09",
      salary: "$85"
    },
    {
      name: "Howard Hatfield",
      position: "Office Manager",
      office: "San Francisco",
      age: "51",
      date: "2008/12/16",
      salary: "$164"
    },
    {
      name: "Hope Fuentes",
      position: "Secretary",
      office: "San Francisco",
      age: "41",
      date: "2010/02/12",
      salary: "$109"
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
