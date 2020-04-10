import React, { useEffect, useState } from "react";
import { apiUrl } from "../../config";
import axios from "axios";
import { Link } from "react-router-dom";
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
  MDBIcon,
  MDBBadge
} from "mdbreact";

const RoleManagement = () => {
  const [openModal, setOpenModal] = useState(false);
  const [roles, setRoles] = useState([]);
  const [roleName, setRoleName] = useState('');
  const [feedback, setFeedback] = useState(null);
  const [loading, setLoading] = useState(false);


  const toggleModal = () => {
    setOpenModal(!openModal);
  }


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
        label: "Date Updated",
        field: "dateUpdated"
      },
      {
        label: "Action",
        field: "action"
      }
    ],
    rows: roles
  };


  const loadRoles = async () => {
    axios.get(`${apiUrl}/admin-roles`, {
      headers: { "x-admin-auth": localStorage.getItem('token') }
    })
      .then(res => {
        let cnt = 1;
        let sn = roles.length;
        const rows = res.data.data.map(role => {
          const row = {
            sn: sn + 1,
            roleName: role.name,
            dateCreated: role.createdAt,
            dateUpdated: role.updatedAt,
            action: (<div>
              {(cnt !== 1) && (<>
                <MDBBadge className="primary-color mx-1"><MDBIcon icon="edit" className="white-text" /></MDBBadge>
                <MDBBadge className="danger-color"><MDBIcon icon="trash-alt" className="white-text" /></MDBBadge>
              </>)}
            </div>)
          };
          sn++
          cnt++;
          return row;
        })
        setRoles([...roles, ...rows]);
      })
      .catch(err => {
        console.log(err);
        return [];
      })
  }

  const createRole = () => {
    setLoading(true);
    if (!roleName) {
      setLoading(false);
      return setFeedback("Role name cannot be empty!");
    }
    const name = { name: roleName };
    axios.post(`${apiUrl}/admin-roles`, name, {
      headers: { "x-admin-auth": localStorage.getItem('token') }
    })
      .then(res => {
        const role = res.data.data
        const row = {
          sn: roles.length + 1,
          roleName: role.name,
          dateCreated: role.createdAt,
          dateUpdated: role.updatedAt,
          action: (<div>
            <MDBBadge className="primary-color mx-1"><MDBIcon icon="edit" className="white-text" /></MDBBadge>
            <MDBBadge className="danger-color"><MDBIcon icon="trash-alt" className="white-text" /></MDBBadge>
          </div>)
        };
        setRoles([...roles, row]);
        setLoading(false);
        toggleModal();
      })
      .catch(err => {
        setLoading(false);
        console.log(err);
      })
  }

  useEffect(() => {
    loadRoles();
  }, []);

  const handleRoleName = (e) => {
    setRoleName(e.target.value);
  }

  return (
    <MDBContainer>
      <MDBBtn className="teal accent-4" onClick={() => {
        toggleModal();
      }
      }>Create New Role</MDBBtn>
      <MDBCard>
        <MDBCard narrow className="z-depth-0">
          <MDBView
            cascade
            className="teal accent-4 narrower py-2 my-3 d-flex justify-content-between align-items-center"
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
          className='teal accent-4 white-text'
        >
          <MDBIcon icon="add" className='mr-2' />{' '}
          Create A New Role
        </MDBModalHeader>
        <div className="alert-danger">{feedback && feedback}</div>
        <MDBModalBody className='mb-0'>
          <MDBInput label='Role  Name' value={roleName} onChange={(val) => handleRoleName(val)} />
          <div className='text-center mb-1-half'>
            <MDBBtn
              className='teal accent-4 mb-2'
              onClick={() => createRole()}
            >{loading && (
              <div className="spinner-border spinner-border-sm text-white" role="status">
                <span className="sr-only">Loading...</span>
              </div>)}
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
