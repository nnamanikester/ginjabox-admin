/*
* A Page that displays the users information including; Listings Log,
* transactions Log, and other necessary information. 
*/
import React, { useEffect, useState } from "react";
import { apiUrl } from "../config";
import axios from "axios";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardTitle,
  MDBCardBody,
  MDBBadge,
  MDBDataTable,
  MDBCardHeader
} from 'mdbreact';
import Skeleton from "react-loading-skeleton";


const SingleUser = ({ match }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadUser = async () => {
    setLoading(true);
    axios.get(`${apiUrl}/users/${match.params.id}`, {
      headers: { "x-admin-auth": localStorage.getItem('token') }
    })
      .then(res => {
        setUser(res.data.data)
        setLoading(false);
      })
      .catch(err => {
        setLoading(null);
        return [];
      })
  }

  useEffect(() => {
    loadUser()
  }, [])



  const transactions = {
    columns: [
      {
        label: "S/N",
        field: "sn",
      },
      {
        label: "Transaction ID",
        field: "transactionId",
      },
      {
        label: "Type",
        field: "type",
      },
      {
        label: "Description",
        field: "desc",
      },
      {
        label: "Commission",
        field: "commission",
      },
      {
        label: "Status",
        field: "status",
      },
      {
        label: "Date",
        field: "date",
      }
    ],
    rows: user ? user.transactions.map(tr => {
      let sn = user.transactions.indexOf(tr);
      const row = {
        sn: sn + 1,
        transactionId: tr.id,
        type: tr.type,
        desc: tr.description,
        commission: tr.fees,
        status: tr.status === 2 ? <MDBBadge color="success">Success</MDBBadge> : <MDBBadge className="danger-color">Failed</MDBBadge>,
        date: tr.createdAt
      }
      return row;
    }) : []
  };



  const listings = {
    columns: [
      {
        label: "S/N",
        field: "sn",
      },
      {
        label: "Listing ID",
        field: "id"
      },
      {
        label: "Name",
        field: "name",
      },
      {
        label: "Slug",
        field: "slug",
      },
      {
        label: "Description",
        field: "description",
      },
      {
        label: <span>Price &#8358;</span>,
        field: "price",
      },
      {
        label: "Discount",
        field: "discount",
      }
    ],
    rows: user ? user.listings.map(listing => {
      let sn = user.listings.indexOf(listing);
      const row = {
        sn: sn + 1,
        id: listing.id,
        name: listing.name,
        slug: listing.slug,
        description: listing.description,
        price: listing.price,
        discount: listing.discount
      }
      return row;
    }) : []
  };

  const ratingHistory = {
    columns: [
      {
        label: "S/N",
        field: "sn",
      },
      {
        label: "Rating ID",
        field: "ratingId"
      },
      {
        label: "Rate",
        field: "rate",
      },
      {
        label: "User",
        field: "user",
      },
      {
        label: "Listing",
        field: "listingId",
      }
    ],
    rows: user ? user.ratings.map(rating => {
      let sn = user.ratings.indexOf(rating);
      const row = {
        sn: sn + 1,
        listingId: rating.listingId,
        rate: rating.rate,
        ratingId: rating.ratingId,
        user: rating.userId
      }
      return row;
    }) : []
  };

  const ErrorLoading = () => {
    return (
      <MDBContainer className="d-flex justify-content-center">
        <div className="mt-5">
          <h1>NETWORK ERROR!</h1><br />
          <p>Please Check your Internet and reload the page.</p>
        </div>
      </MDBContainer>
    );
  }

  if (loading) {
    return (
      <div id='profile-ex' className='mb-5'>
        <MDBContainer fluid>
          <MDBRow>
            <MDBCol lg='4' md='12'>
              <MDBCard className='profile-card text-center mb-4'>
                <MDBCardHeader className="teal accent-4 text-white">
                  <Skeleton />
                </MDBCardHeader>
                <MDBCardBody>
                  <Skeleton count={4} />
                </MDBCardBody>
              </MDBCard>
              <MDBCard className='mb-4'>
                <MDBCardHeader className="teal accent-4 text-white">
                  <Skeleton />
                </MDBCardHeader>
                <MDBCardBody>
                  <Skeleton count={4} />
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol lg='8' md='12' className='text-center'>
              <MDBCard className="mb-4">
                <MDBCardHeader className="teal accent-4 text-white">
                  <Skeleton />
                </MDBCardHeader>
                <MDBCardBody>
                  <Skeleton count={8} />
                </MDBCardBody>
              </MDBCard>
              <MDBCard className="mb-4">
                <MDBCardHeader className="teal accent-4 text-white">
                  <Skeleton />
                </MDBCardHeader>
                <MDBCardBody>
                  <Skeleton count={8} />
                </MDBCardBody>
              </MDBCard>
              <MDBCard className="mb-4">
                <MDBCardHeader className="teal accent-4 text-white">
                  <Skeleton />
                </MDBCardHeader>
                <MDBCardBody>
                  <Skeleton count={8} />
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  } else if (loading === null) {
    return <ErrorLoading />
  } else {
    return (
      <div id='profile-ex' className='mb-5'>
        <MDBContainer fluid>
          <MDBRow>
            <MDBCol lg='4' md='12'>
              <MDBCard className='profile-card text-center mb-4'>
                <MDBCardBody>
                  <MDBCardTitle>
                    <strong>{user.firstName} {user.lastName}</strong>
                  </MDBCardTitle>
                  <span>
                    <span className="teal-text">{user.email}</span>
                    {' | '}
                    <span className="teal-text">{user.phoneNumber}</span>
                  </span>
                  <ul className='list-unstyled pt-4 text-left'>

                    <hr />
                    <li>
                      <p>
                        Date of Birth{' '}
                        <span className='float-right'>
                          {user.dob}
                        </span>
                      </p>
                    </li>
                    <hr />
                    <li>
                      <p>
                        Available Balance (&#8358;){' '}
                        <span className='float-right'>
                          {user.wallet.availableBalance}
                        </span>
                      </p>
                    </li>
                    <hr />
                    <li>
                      <p>
                        Ledger Balance (&#8358;){' '}
                        <span className='float-right'>
                          {user.wallet.ledgerBalance}
                        </span>
                      </p>
                    </li>
                    <hr />
                  </ul>
                </MDBCardBody>
              </MDBCard>


              <MDBCard className='mb-4'>
                <MDBCardBody>
                  <h5 className='text-center mb-4'>
                    <strong>{user.firstName}'s Statistics </strong>
                  </h5>
                  <ul className='list-unstyled pt-4'>
                    <li>
                      <p>
                        Total Listings{' '}
                        <MDBBadge className='teal accent-4 float-right'>
                          {user.listings.length}
                        </MDBBadge>
                      </p>
                    </li>
                    <hr />
                    <li>
                      <p>
                        Total Transactions{' '}
                        <MDBBadge className='teal accent-4 float-right'>
                          {user.transactions.length}
                        </MDBBadge>
                      </p>
                    </li>
                  </ul>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol lg='8' md='12' className='text-center'>
              <MDBCard className="mb-4">
                <MDBCardHeader className="teal accent-4 text-white">
                  {user.firstName}'s Transactions Log
                </MDBCardHeader>
                <MDBCardBody>
                  <MDBDataTable striped responsive bordered small hover data={transactions} />
                </MDBCardBody>
              </MDBCard>

              <MDBCard className="mb-4">
                <MDBCardHeader className="teal accent-4 text-white">
                  {user.firstName}'s Listings Log
                </MDBCardHeader>
                <MDBCardBody>
                  <MDBDataTable striped responsive bordered small hover data={listings} />
                </MDBCardBody>
              </MDBCard>

              <MDBCard className="mb-4">
                <MDBCardHeader className="teal accent-4 text-white">
                  {user.firstName}'s Rating History
                </MDBCardHeader>
                <MDBCardBody>
                  <MDBDataTable striped responsive bordered small hover data={ratingHistory} />
                </MDBCardBody>
              </MDBCard>

            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default SingleUser;
