import React, { Component } from "react";
import "../App.css";
import SideNavigation from "./SideNavigation";
import TopNavigation from "./TopNavigation";
import Copyrights from "./Footer";
import Routes from "./Routes";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      windowWidth: 0,
      currentPage: "",
      sideNavToggled: false,
      breakWidth: 1400
    };
  }

  componentDidUpdate(prevProps, nextProps, snapshot) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.assessLocation(this.props.location.pathname);
    }
  }
  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
    this.assessLocation(this.props.location.pathname);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    this.setState({
      windowWidth: window.innerWidth
    });
  };

  toggleSideNav = () => {
    if (this.state.windowWidth < this.state.breakWidth) {
      this.setState({
        sideNavToggled: !this.state.sideNavToggled
      });
    }
  };

  assessLocation = location => {
    let locationString;
    switch (location) {
      // Dashboards:
      case "/":
        locationString = "Dashboard";
        break;
      case "/email-notifications":
        locationString = "Email Notification";
        break;
      case "/logs/dispatch-order-log":
        locationString = "Dispatch Orders";
        break;
      case "/logs/rejected-stock-log":
        locationString = "Rejected Stocks";
        break;
      case "/logs/stock-receipt-log":
        locationString = "Stock Receipts";
        break;
      case "/settings/edit-password":
        locationString = "Edit Password";
        break;
      case "/settings/email-settings":
        locationString = "Email Setting";
        break;
      case "/settings/sms-settings":
        locationString = "SMS Setting";
        break;
      case "/staff/add-staff":
        locationString = "Add Staff";
        break;
      case "/staff/all-staff":
        locationString = "All Staff";
        break;
      case "/staff/management":
        locationString = "Management";
        break;
      case "/staff/super-admin":
        locationString = "Super Admin";
        break;
      case "/staff/support":
        locationString = "Support";
        break;
      case "/staff/team-lead":
        locationString = "Team Lead";
        break;
      case "/logs/expired-rent-log":
        locationString = "Expired Rents";
        break;
      case "/logs/merchant-payout-log":
        locationString = "Merchant Payouts";
        break;
      case "/logs/referral-log":
        locationString = "Referrals";
        break;
      case "/logs/warehousers-payment-log":
        locationString = "Wayhousers' Payments";
        break;
      case "/logs/withdrawal-log":
        locationString = "Withdrawals";
        break;
      case "/users/merchants":
        locationString = "Merchants";
        break;
      case "/users/all-users":
        locationString = "All Users";
        break;
      case "/users/warehousers":
        locationString = "WareHousers";
        break;
      case "/users/banned-users":
        locationString = "Banned Users";
        break;
      case "/users/user-rating-history":
        locationString = "User Rating History";
        break;
      case "/listings":
        locationString = "All Listings";
        break;
      case "/listings/available-listings":
        locationString = "Available Listings";
        break;
      case "/listings/expired-listings":
        locationString = "Expired Listings";
        break;
      case "/listings/requisitions":
        locationString = "All Requisitions";
        break;
      default:
    }
    this.setState({
      currentPage: locationString
    });
  };

  render() {
    const dynamicLeftPadding = {
      paddingLeft:
        this.state.windowWidth > this.state.breakWidth ? "240px" : "0"
    };

    return (
      <div className="app">
        <div className="white-skin">
          <SideNavigation
            breakWidth={this.state.breakWidth}
            style={{ transition: "all .3s" }}
            triggerOpening={this.state.sideNavToggled}
            onLinkClick={() => this.toggleSideNav()}
          />
        </div>
        <div className="flexible-content white-skin">
          <TopNavigation
            toggle={this.state.windowWidth < this.state.breakWidth}
            onSideNavToggleClick={this.toggleSideNav}
            routeName={this.state.currentPage}
            className="white-skin"
          />
          <main style={{ ...dynamicLeftPadding, margin: "8rem 6% 6rem" }}>
            <Routes onChange={() => this.assessLocation()} />
          </main>
          <Copyrights
            style={{ ...dynamicLeftPadding, position: "fixed", width: "100%" }}
            className="d-none d-lg-block"
          />
        </div>
      </div>
    );
  }
}

export default App;
