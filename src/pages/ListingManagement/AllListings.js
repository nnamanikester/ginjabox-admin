import React, { useEffect, useState } from "react";
import { apiUrl } from "../../config";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import {
  MDBCard,
  MDBCardBody,
  MDBContainer,
  MDBDataTable,
  MDBView,
  MDBIcon,
  MDBBadge,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBBtn,
  MDBInput
} from "mdbreact";

const AllListings = () => {

  const [loading, setLoading] = useState(false);
  const [listings, setListings] = useState([]);
  const [listing, setListing] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [editModal, setEditModal] = useState(false);

  const toggleEdit = (listing) => {
    setListing(listing);
    setEditModal(!editModal);
  }

  const data = {
    columns: [
      {
        label: "S/N",
        field: "sn",
      },
      {
        label: "Listin Id",
        field: "id",
      },
      {
        label: "Name",
        field: "name",
      },
      {
        label: "Description",
        field: "description",
      },
      {
        label: "Price",
        field: "price",
      },
      {
        label: "Discount",
        field: "discount",
      },
      {
        label: "User",
        field: "user",
      },
      {
        label: "Availability",
        field: "availability",
      },
      {
        label: "Status",
        field: "status",
      },
      {
        label: "Action",
        field: "action",
      },
    ],
    rows: !loading ? listings : [{
      sn: <Skeleton />,
      id: <Skeleton />,
      name: <Skeleton />,
      description: <Skeleton />,
      price: <Skeleton />,
      discount: <Skeleton />,
      user: <Skeleton />,
      availability: <Skeleton />,
      action: <Skeleton />,
      status: <Skeleton />
    }]
  };

  const loadListings = async () => {
    setLoading(true);
    axios.get(`${apiUrl}/listings`, {
      headers: { "x-admin-auth": localStorage.getItem('token') }
    })
      .then(res => {
        let sn = listings.length;
        const rows = res.data.data.map(listing => {
          const row = {
            sn: sn + 1,
            id: listing.id,
            name: listing.name,
            description: listing.description,
            price: listing.price,
            discount: listing.discount,
            user: <Link className="teal-text" to={`/user/${listing.user.id}`}>{listing.user.firstName} {listing.user.lastName}</Link>,
            availability: listing.availability.to > Date.now() ? <MDBBadge color="success">Available</MDBBadge> : <MDBBadge color="danger">Expired</MDBBadge>,
            status: listing.status === 2 ? <MDBBadge color="success">Active</MDBBadge> : <MDBBadge className="danger-color">Blocked</MDBBadge>,
            action: listing.availability.to < Date.now() ? (<div>
              <MDBBadge className="primary-color mr-1" onClick={() => toggleEdit(listing)}><MDBIcon icon="edit" className="white-text" /></MDBBadge>
              <MDBBadge className="danger-color" onClick={() => handleDeleteListing(listing)}><MDBIcon icon="trash" className="white-text" /></MDBBadge>
            </div>) : listing.status !== 2 ? (<div>
              <MDBBadge className="primary-color" onClick={() => toggleEdit(listing)}><MDBIcon icon="edit" className="white-text" /></MDBBadge>
              <MDBBadge className="success-color mx-1" onClick={() => handleActivateListing(listing)}><MDBIcon icon="check" className="white-text" /></MDBBadge>
              <MDBBadge className="danger-color" onClick={() => handleDeleteListing(listing)}><MDBIcon icon="trash" className="white-text" /></MDBBadge>
            </div>) : (<div>
              <MDBBadge className="primary-color mr-1" onClick={() => toggleEdit(listing)}><MDBIcon icon="edit" className="white-text" /></MDBBadge>
              <MDBBadge className="danger-color" onClick={() => handleBlockListing(listing)}><MDBIcon icon="ban" className="white-text" /></MDBBadge>
            </div>)
          };
          sn++;
          return row;
        })
        setLoading(false);
        setListings(rows);
      })
      .catch(err => {
        console.log(err);
        return [];
      })
  }

  useEffect(() => {
    loadListings();
  }, []);

  const handleDeleteListing = (listing) => {
    if (window.confirm("Are you sure you want to Delete this listing? \nNB: This cannot be undone!")) {
      axios.delete(`${apiUrl}/listings/${listing.id}`, {
        headers: { "x-admin-auth": localStorage.getItem('token') }
      })
        .then(res => {
          if (res.data.success) {
            window.location.reload();
          }
        })
        .catch(err => {
          return err;
        })
    }
  }

  const handleActivateListing = (listing) => {
    if (window.confirm("Are you sure you want to unblock this listing?")) {
      axios.put(`${apiUrl}/listings/${listing.id}`, { status: 2 }, {
        headers: { "x-admin-auth": localStorage.getItem('token') }
      })
        .then(res => {
          if (res.data.success) {
            window.location.reload();
          }
        })
        .catch(err => {
          return err;
        })
    }
  }

  const handleBlockListing = (listing) => {
    if (window.confirm("Are you sure you want to Block this listing?")) {
      axios.put(`${apiUrl}/listings/${listing.id}`, { status: 1 }, {
        headers: { "x-admin-auth": localStorage.getItem('token') }
      })
        .then(res => {
          if (res.data.success) {
            window.location.reload();
          }
        })
        .catch(err => {
          return err;
        })
    }
  }


  const handleEditInput = (val, data) => {
    listing[data] = val.target.value;
    setListing({ ...listing });
  }
  const handleEditListing = () => {
    setLoading(true);
    const data = {
      name: listing.name,
      proofOfOwnership: listing.proofOfOwnership,
      description: listing.description,
      price: parseInt(listing.price),
      slug: listing.slug,
      currency: listing.currency,
      discount: parseInt(listing.discount),
      windows: parseInt(listing.windows),
    }
    axios.put(`${apiUrl}/listings/${listing.id}`, data, {
      headers: { "x-admin-auth": localStorage.getItem('token') }
    })
      .then(res => {
        if (res.data.success) {
          window.location.reload();
          return toggleEdit(listing);
        }
      })
      .catch(err => {
        setFeedback("Unable to update listing!");
        return err;
      })
  }

  return (
    <MDBContainer>
      <MDBCard>
        <MDBCard narrow className="z-depth-0">
          <MDBView
            cascade
            className="teal accent-4 narrower py-2 my-3 d-flex justify-content-between align-items-center"
          >
            <div className="text-left"></div>
            <span className="white-text text-bold mx-3">
              All Listings
            </span>
            <div className="text-right"></div>
          </MDBView>
        </MDBCard>
        <MDBCardBody>
          <MDBDataTable striped responsive bordered small hover data={data} />
        </MDBCardBody>
      </MDBCard>


      <MDBModal
        isOpen={editModal}
        toggle={() => this.toggleEdit(listing)}
        inline={editModal === false}
        backdrop={editModal === false ? false : true}
        cascading
        disableFocusTrap={editModal === false ? true : false}>
        <MDBModalHeader
          toggle={editModal === false ? () => { } : () => toggleEdit(listing)}
          className='teal accent-4 white-text'
        >
          <MDBIcon icon="add" className='mr-2' />{' '}
          Edit {listing && listing.name}'s Details
        </MDBModalHeader>
        <div className="alert-danger">{feedback && feedback}</div>
        <MDBModalBody className='mb-0'>
          <MDBInput label='Name' value={listing && listing.name} onChange={(val) => handleEditInput(val, "name")} />
          <MDBInput label='Proof Of  Ownership' value={listing && listing.proofOfOwnership} onChange={(val) => handleEditInput(val, "proofOfOwnership")} />
          <MDBInput label='Description' value={listing && listing.description} onChange={(val) => handleEditInput(val, "description")} />
          <MDBInput label='Price' value={listing && listing.price} onChange={(val) => handleEditInput(val, "price")} />
          <MDBInput label='Slug' value={listing && listing.slug} onChange={(val) => handleEditInput(val, "slug")} />
          <MDBInput label='Currency' value={listing && listing.currency} onChange={(val) => handleEditInput(val, "currency")} />
          <MDBInput label='Discount' value={listing && listing.discount} onChange={(val) => handleEditInput(val, "discount")} />
          <MDBInput label='Windows' value={listing && listing.windows} onChange={(val) => handleEditInput(val, "windows")} />
          <div className='text-center mb-1-half'>
            <MDBBtn
              className='teal accent-4 mb-2'
              onClick={() => handleEditListing()}
            >{loading && (
              <div className="spinner-border spinner-border-sm text-white" role="status">
                <span className="sr-only">Loading...</span>
              </div>)}
              Update
              <MDBIcon icon="plus" className='ml-1' />
            </MDBBtn>
          </div>
        </MDBModalBody>
      </MDBModal>

    </MDBContainer>
  );
};

export default AllListings;
