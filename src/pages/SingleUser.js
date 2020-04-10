/*
* A Page that displays the users information including; Listings Log,
* transactions Log, and other necessary information. 
*/
import React, { Component } from "react";
import { apiUrl } from "../config";
import axios from "axios";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardTitle,
  MDBCardBody,
  MDBIcon,
  MDBBadge,
  MDBInput,
  MDBAvatar,
  MDBBtn,
  MDBModal,
  MDBModalHeader,
  MDBModalBody,
  MDBModalFooter,
  MDBDataTable,
  MDBCardHeader
} from 'mdbreact';


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
      label: "From",
      field: "from",
    },
    {
      label: "To",
      field: "to",
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
  rows: [
    {
      sn: "1",
      transactionId: "876483hu384989G94",
      type: "warehouse payment",
      status: "cleared",
      from: "John Kester",
      to: "Somto Zech",
      date: "2020/03/25"
    },
    {
      sn: "2",
      transactionId: "876483hu384989G94",
      type: "Funds Account",
      status: "cleared",
      from: "John Kester",
      to: "Somto Zech",
      date: "2020/03/24"
    }
  ]
};
const referrals = {
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
      label: "Date Joined",
      field: "date",
    },
    {
      label: "Action",
      field: "action",
    },
  ],
  rows: [
    {
      sn: "1",
      name: "John Kester",
      email: "email@gmail.com",
      date: "2020/03/02",
      action: <div><a href="#!">View User</a></div>
    },
    {
      sn: "2",
      name: "Nwagu Victor",
      email: "warehouse payment",
      date: "2020/22/12",
      action: <div><a href="#!">View User</a></div>
    },
  ]
};

const listings = {
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
      label: "Location",
      field: "location",
    },
    {
      label: <span>Price &#8358;</span>,
      field: "price",
    },
    {
      label: "Discount (%)",
      field: "discount",
    },
    {
      label: "Rating (6/6)",
      field: "rating",
    },
    {
      label: "Available Spaces",
      field: "availability",
    },
    {
      label: "Date",
      field: "date",
    }
  ],
  rows: [
    {
      sn: "1",
      name: "Bed Partium",
      location: "Victorial island, Lagos",
      price: "200, 000",
      discount: "20",
      rating: "6",
      availability: "23",
      date: "2020/03/25"
    },
    {
      sn: "2",
      name: "Parrot Space",
      location: "Independence Layout, Enugu.",
      price: "150, 000",
      discount: "5",
      rating: "5",
      availability: "12",
      date: "2020/03/25"
    },
  ]
};

const ratingHistory = {
  columns: [
    {
      label: "S/N",
      field: "sn",
    },
    {
      label: "Rate (6/6)",
      field: "rate",
    },
    {
      label: "User",
      field: "user",
    },
    {
      label: "Listing",
      field: "listing",
    },
    {
      label: "Date",
      field: "date",
    }
  ],
  rows: [
    {
      sn: "1",
      rate: "6",
      user: "John Kester",
      listing: "Bed Partium",
      date: "2020/03/25"
    },
    {
      sn: "2",
      rate: "5",
      user: "Jefferson Jack",
      listing: "Parrot Space",
      date: "2020/03/25"
    },
  ]
};



class SingleUser extends Component {

  state = {
    user: null,
    send: false
  }

  componentDidMount() {
    this.loadUser();
  }

  toggleSendMail = () => {
    this.setState({ send: !this.state.send });
  };

  loadUser = async () => {
    axios.get(`${apiUrl}/users/${this.props.match.params.id}`, {
      headers: { "x-admin-auth": localStorage.getItem('token') }
    })
      .then(res => {
        this.setState({ user: res.data.data })
      })
      .catch(err => {
        return [];
      })
  }


  renderModal = () => {
    return (
      <MDBModal
        isOpen={this.state.send}
        toggle={() => this.toggleSendMail()}
        cascading
      >
        <MDBModalHeader
          toggle={() => this.toggleSendMail()}
          className='teal accent-4 white-text'
        >
          <MDBIcon icon="envelope" className='mr-2' /> New Message
        </MDBModalHeader>
        <MDBModalBody>
          <MDBInput type='textarea' label='Your message' rows={4} />
        </MDBModalBody>
        <MDBModalFooter center>
          <MDBBtn outline color='teal' onClick={() => this.toggleSendMail()}>
            Cancel
          </MDBBtn>
          <MDBBtn color='teal'>
            Send <MDBIcon icon="paper-plane" className='ml-1' />
          </MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    );
  };
  render() {
    return (
      <div id='profile-ex' className='mb-5'>
        {this.renderModal('send')}

        <MDBContainer fluid>
          <MDBRow>
            <MDBCol lg='4' md='12'>
              <MDBCard className='profile-card text-center mb-4'>
                <MDBAvatar
                  tag='img'
                  alt='John Doe'
                  src='https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg'
                  className='z-depth-1-half mb-4'
                />
                <MDBCardBody>
                  <MDBCardTitle>
                    <strong>{this.state.user ? this.state.user.firstName : ''} {this.state.user ? this.state.user.lastName : ''}</strong>
                  </MDBCardTitle>
                  <span>
                    <span className="teal-text">{this.state.user ? this.state.user.email : ''}</span>
                    {' | '}
                    <span className="teal-text">{this.state.user ? this.state.user.phoneNumber : ''}</span>
                  </span>
                  <p className='dark-grey-text'>123 Agbani Road, Enugu, Nigeria.</p>
                  <ul className='list-unstyled pt-4 text-left'>
                    <li>
                      <p>
                        LGA{' '}
                        <span className='float-right'>
                          Enugu South
                        </span>
                      </p>
                    </li>
                    <hr />
                    <li>
                      <p>
                        Date of Birth{' '}
                        <span className='float-right'>
                          1999-22-11
                        </span>
                      </p>
                    </li>
                    <hr />
                    <li>
                      <p>
                        Available Balance (&#8358;){' '}
                        <span className='float-right'>
                          20,000
                        </span>
                      </p>
                    </li>
                    <hr />
                    <li>
                      <p>
                        Ledger Balance (&#8358;){' '}
                        <span className='float-right'>
                          120,000
                        </span>
                      </p>
                    </li>
                    <hr />
                    <li>
                      <p>
                        Referral ID{' '}
                        <span className='float-right'>
                          17hf64HF4
                        </span>
                      </p>
                    </li>
                    <hr />
                    <li>
                      <p>
                        Date Joined{' '}
                        <span className='float-right'>
                          2020-02-29
                        </span>
                      </p>
                    </li>
                    <hr />
                  </ul>
                  <p className='card-text mt-3'>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <MDBBtn
                    className="teal accent-4"
                    size='sm'
                    rounded
                    onClick={() => {
                      this.toggleSendMail();
                    }}
                  >
                    Send Mail
                    <MDBIcon icon='paper-plane' className='ml-2' />
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>


              <MDBCard className='mb-4'>
                <MDBCardBody>
                  <h5 className='text-center mb-4'>
                    <strong>John's Statistics </strong>
                  </h5>
                  <ul className='list-unstyled pt-4'>
                    <li>
                      <p>
                        Total Listings{' '}
                        <MDBBadge className='teal accent-4 float-right'>
                          34
                        </MDBBadge>
                      </p>
                    </li>
                    <hr />
                    <li>
                      <p>
                        Total Transactions{' '}
                        <MDBBadge className='teal accent-4 float-right'>
                          17
                        </MDBBadge>
                      </p>
                    </li>
                    <hr />
                    <li>
                      <p>
                        Transactions Earnings (&#8358;){' '}
                        <span className=' float-right'>
                          120,000
                        </span>
                      </p>
                    </li>
                    <hr />
                    <li>
                      <p>
                        Total Referrals{' '}
                        <MDBBadge className='teal accent-4 float-right'>
                          12
                        </MDBBadge>
                      </p>
                    </li>
                    <hr />
                    <li>
                      <p>
                        Referral Earnings (&#8358;){' '}
                        <span className=' float-right'>
                          30, 000
                        </span>
                      </p>
                    </li>
                  </ul>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol lg='8' md='12' className='text-center'>
              <MDBCard className="mb-4">
                <MDBCardHeader className="teal accent-4 text-white">
                  John's Transactions Log
                </MDBCardHeader>
                <MDBCardBody>
                  <MDBDataTable striped responsive bordered small hover data={transactions} />
                </MDBCardBody>
              </MDBCard>

              <MDBCard className="mb-4">
                <MDBCardHeader className="teal accent-4 text-white">
                  John's Listings Log
                </MDBCardHeader>
                <MDBCardBody>
                  <MDBDataTable striped responsive bordered small hover data={listings} />
                </MDBCardBody>
              </MDBCard>

              <MDBCard className="mb-4">
                <MDBCardHeader className="teal accent-4 text-white">
                  John's Referrals Log
                </MDBCardHeader>
                <MDBCardBody>
                  <MDBDataTable striped responsive bordered small hover data={referrals} />
                </MDBCardBody>
              </MDBCard>

              <MDBCard className="mb-4">
                <MDBCardHeader className="teal accent-4 text-white">
                  John's Rating History
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
