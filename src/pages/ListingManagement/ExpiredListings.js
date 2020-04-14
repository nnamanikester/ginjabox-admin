import React, { useEffect, useState } from "react";
import { apiUrl } from "../../config";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import {
  MDBCard,
  MDBCardBody,
  MDBContainer,
  MDBDataTable,
  MDBView,
  MDBBadge,
  MDBIcon
} from "mdbreact";

const ExpiredListings = () => {

  const [loading, setLoading] = useState(false);
  const [listings, setListings] = useState([]);

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
        label: "Status",
        field: "status",
      },
      {
        label: "Date Expired",
        field: "date",
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
      action: <Skeleton />,
      status: <Skeleton />,
      date: <Skeleton />
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
          if (listing.availability.to < Date.now()) {
            const row = {
              sn: sn + 1,
              id: listing.id,
              name: listing.name,
              description: listing.description,
              price: listing.price,
              discount: listing.discount,
              user: listing.user.id,
              status: listing.status === 2 ? <MDBBadge color="success">Active</MDBBadge> : <MDBBadge className="danger-color">Blocked</MDBBadge>,
              date: listing.availability.to,
              action: (<div>
                <MDBBadge className="danger-color" onClick={() => handleDeleteListing(listing)}><MDBIcon icon="trash" className="white-text" /></MDBBadge>
              </div>)
            };
            sn++;
            return row;
          }
          return null;
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
      alert(listing.id);
    }
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
              Available Listings
            </span>
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

export default ExpiredListings;
