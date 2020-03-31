import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBContainer,
  MDBDataTable,
  MDBView,
  MDBSelect,
  MDBSelectInput,
  MDBSelectOptions,
  MDBSelectOption,
  MDBCol,
  MDBRow,
  MDBBadge
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
      label: "Email",
      field: "email",
    },
    {
      label: "Phone",
      field: "phone",
    },
    {
      label: "Referral",
      field: "referral",
    },
    {
      label: "Presence Status",
      field: "presenceStatus",
    },
    {
      label: "Account Status",
      field: "accountStatus",
    },
    {
      label: "Join Date",
      field: "joinDate",
    },
    {
      label: "Action",
      field: "action",
    }
  ],
  rows: [
    {
      sn: "1",
      name: "Jonh Jennifer",
      email: "email@gmail.com",
      phone: "+234808593493",
      referral: "3453fHk8A",
      accountStatus: 'Verified',
      presenceStatus: <MDBBadge color='success'>Online</MDBBadge>,
      joinDate: "2020/03/10",
      action: (<div><a href="">View</a><a href="">Edit</a><a href="">Delete</a></div>)
    },
    {
      sn: "1",
      name: "Benard Christain",
      email: "email@gmail.com",
      phone: "+234908894854",
      referral: "34hUF04d",
      accountStatus: 'Unverified',
      presenceStatus: <MDBBadge color='grey'>Offline</MDBBadge>,
      joinDate: "2020/02/14",
      action: (<div><a href="">View</a><a href="">Edit</a><a href="">Delete</a></div>)
    },
  ]
};

const AllUsers = () => {
  return (
    <MDBContainer>
      <MDBCard narror className="z-depth-0 mb-4">
        <MDBCardBody>
          <span className='lead'>
            <span className='badge info-color p-2'>Filter Users</span>
          </span>
          <MDBRow>
            <MDBCol lg="4">
              <MDBSelect>
                <MDBSelectInput selected='Filter By State' />
                <MDBSelectOptions>
                  <MDBSelectOption value='1'>Lagos</MDBSelectOption>
                </MDBSelectOptions>
              </MDBSelect>
            </MDBCol>
            <MDBCol lg="4">
              <MDBSelect>
                <MDBSelectInput selected='Filter By Sex' />
                <MDBSelectOptions>
                  <MDBSelectOption value='1'>Male</MDBSelectOption>
                  <MDBSelectOption value='2'>Female</MDBSelectOption>
                </MDBSelectOptions>
              </MDBSelect>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
      <MDBCard>
        <MDBCard narrow className="z-depth-0">
          <MDBView
            cascade
            className="gradient-card-header blue-gradient narrower py-2 my-3 d-flex justify-content-between align-items-center"
          >
            <div className="text-left"></div>
            <span className="white-text text-bold mx-3">All Users</span>
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

export default AllUsers;
