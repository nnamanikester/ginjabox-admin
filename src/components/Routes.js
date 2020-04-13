import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

// PAGES
import Dashboard from "../pages/Dashboard";
import EmailNotifications from "../pages/EmailNotifications";
import SingleUser from "../pages/SingleUser";

// INVENTORY LOG
import DispatchOrderLog from "../pages/InventoryLog/DispatchOrderLog";
import RejectedStockLog from "../pages/InventoryLog/RejectedStockLog";
import StockReceiptLog from "../pages/InventoryLog/StockReceiptLog";

// SETTNIGS
import EditPassword from "../pages/Settings/EditPassword";
import EmailSettings from "../pages/Settings/EmailSettings";
import SmsSettings from "../pages/Settings/SmsSettings";

// STAFF MANAGEMENT
import AddNewStaff from "../pages/StaffManagement/AddNewStaff";
import AllStaff from "../pages/StaffManagement/AllStaff";
import RoleManagement from "../pages/StaffManagement/RoleManagement";

// TRANSACTION LOG
import ExpiredRentLog from "../pages/TransactionLog/ExpiredRentLog";
import MerchantPayoutLog from "../pages/TransactionLog/MerchantPayoutLog";
import ReferralLog from "../pages/TransactionLog/ReferralLog";
import WareHousersPaymentLog from "../pages/TransactionLog/WareHousersPaymentLog";
import WithdrawalLog from "../pages/TransactionLog/WithdrawalLog";

// USER MANAGEMENT
import AllMerchants from "../pages/UserManagement/AllMerchants";
import AllUsers from "../pages/UserManagement/AllUsers";
import AllWarehouser from "../pages/UserManagement/AllWarehouser";
import BannedUsers from "../pages/UserManagement/BannedUsers";

// LISTING MANAGEMENT
import AllListings from "../pages/ListingManagement/AllListings"
import AvailableListings from "../pages/ListingManagement/AvailableListings"
import AllRequisitions from "../pages/ListingManagement/AllRequisitions"
import ExpiredListings from "../pages/ListingManagement/ExpiredListings"



const FourToFour = () => <h1 className="text-center">404</h1>;

const mapStateToProps = state => ({
  permit: state.permission
})

class Routes extends React.Component {

  isLogged = this.props.isLogged;

  requiresAuth = (Comp, match = "") => {
    if (this.isLogged || localStorage.getItem("token")) {
      return <Comp match={match} />;
    } else {
      return <Redirect to="/login" />
    }
  }

  render() {
    const { permit } = this.props;
    return (
      <Switch>
        <Route path="/" exact render={({ match }) => this.requiresAuth(Dashboard, match)} />
        <Route
          path="/email-notification"
          exact
          render={({ match }) => this.requiresAuth(EmailNotifications, match)}
        />
        <Route
          path="/user/:id"
          exact
          render={({ match }) => this.requiresAuth(SingleUser, match)}
        />

        {/* INVENTORY LOG */}
        <Route
          path="/logs/dispatch-order-log"
          exact
          render={({ match }) => this.requiresAuth(DispatchOrderLog, match)}
        />
        <Route
          path="/logs/rejected-stock-log"
          exact
          render={({ match }) => this.requiresAuth(RejectedStockLog)}
        />
        <Route
          path="/logs/stock-receipt-log"
          exact
          render={({ match }) => this.requiresAuth(StockReceiptLog)}
        />

        {/* SETTINGS */}
        <Route path="/settings/edit-password" exact render={({ match }) => this.requiresAuth(EditPassword)} />
        {/* {(permission === 1 || this.permission === 2) && (<> */}
        <Route
          path="/settings/email-settings"
          exact
          render={({ match }) => this.requiresAuth(EmailSettings)}
        />
        <Route path="/settings/sms-settings" exact render={({ match }) => this.requiresAuth(SmsSettings)} />
        {/* </>)} */}

        {/* STAFF MANAGEMENT */}
        {permit.management && <Route path="/staff/add-staff" exact render={({ match }) => this.requiresAuth(AddNewStaff, match)} />}
        {permit.management && <Route path="/staff/all-staff" exact render={({ match }) => this.requiresAuth(AllStaff, match)} />}
        {permit.management && <Route path="/staff/role-management" exact render={({ match }) => this.requiresAuth(RoleManagement, match)} />}

        {/* TRANSACTION LOG */}
        {permit.management && <Route path="/logs/expired-rent-log" exact render={({ match }) => this.requiresAuth(ExpiredRentLog, match)} />}
        {permit.management && <Route
          path="/logs/merchant-payout-log"
          exact
          render={({ match }) => this.requiresAuth(MerchantPayoutLog, match)}
        />}
        {permit.management && <Route path="/logs/referral-log" exact render={({ match }) => this.requiresAuth(ReferralLog, match)} />}
        {permit.management && <Route
          path="/logs/warehousers-payment-log"
          exact
          render={({ match }) => this.requiresAuth(WareHousersPaymentLog, match)}
        />}
        {permit.management && <Route path="/logs/withdrawal-log" exact render={({ match }) => this.requiresAuth(WithdrawalLog, match)} />}

        {/* USER MANAGEMENT */}
        <Route path="/users/merchants" exact render={({ match }) => this.requiresAuth(AllMerchants, match)} />
        <Route path="/users/all-users" exact render={({ match }) => this.requiresAuth(AllUsers, match)} />
        <Route path="/users/warehousers" exact render={({ match }) => this.requiresAuth(AllWarehouser, match)} />
        <Route path="/users/banned-users" exact render={({ match }) => this.requiresAuth(BannedUsers, match)} />

        {/* LISTING MANAGEMENT */}
        <Route path="/listings" exact render={({ match }) => this.requiresAuth(AllListings, match)} />
        <Route path="/listings/available-listings" exact render={({ match }) => this.requiresAuth(AvailableListings, match)} />
        <Route path="/listings/requisitions" exact render={({ match }) => this.requiresAuth(AllRequisitions, match)} />
        <Route path="/listings/expired-listings" exact render={({ match }) => this.requiresAuth(ExpiredListings, match)} />


        <Route render={({ location }) => {
          if (location.pathname === "/login") return <Redirect to="/" />;
          return <FourToFour />
        }} />
      </Switch>
    );
  }
}

export default connect(mapStateToProps)(Routes);
