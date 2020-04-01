import React, { useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBContainer,
  MDBDataTable,
  MDBView,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBInput,
  MDBIcon
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

  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal(!openModal);
  }

  return (
    <MDBContainer>
      <MDBBtn color="primary" onClick={() => {
        toggleModal();
      }
      }>Create New Role</MDBBtn>
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


      <MDBModal
        isOpen={openModal}
        toggle={() => this.toggleModal()}
        inline={openModal === false}
        backdrop={openModal === false ? false : true}
        cascading
        disableFocusTrap={openModal === false ? true : false}>
        <MDBModalHeader
          toggle={openModal === false ? () => { } : () => toggleModal()}
          className='light-blue darken-3 white-text'
        >
          <MDBIcon icon="add" className='mr-2' />{' '}
          Create A New Role
        </MDBModalHeader>
        <MDBModalBody className='mb-0'>
          <MDBInput label='Role  Name' />
          <div className='text-center mb-1-half'>
            <MDBBtn
              color='info'
              className='mb-2'
              onClick={openModal === false ? () => { } : () => toggleModal()}
            >
              Create
              <MDBIcon icon="plus" className='ml-1' />
            </MDBBtn>
          </div>
        </MDBModalBody>
      </MDBModal>

    </MDBContainer>
  );
};

export default RoleManagement;
