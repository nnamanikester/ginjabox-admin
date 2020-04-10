import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getPermission } from "../Redux/actions/permission";

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



import Customers from "./pages/Customers";
import Invoice from "./pages/Invoice";
import Chat from "./pages/Chat";
import PageCreator from "./pages/PageCreator.js";

import PV1 from "./profile/v1";
import PV2 from "./profile/v2";
import PExtended from "./profile/extended";

import Google from "./maps/google";
import MFull from "./maps/full";
import Vector from "./maps/vector";

import TBasic from "./tables/basic";
import TExtended from "./tables/extended";
import Datatable from "./tables/datatable";

import Grid from "./css/grid";
import Utilities from "./css/utilities";
import Code from "./css/code";
import Icons from "./css/icons";
import Images from "./css/images";
import Typography from "./css/typography";
import Colors from "./css/colors";
import Shadows from "./css/shadows";
import Masks from "./css/masks";
import Hover from "./css/hover";
import MediaObject from "./css/media";
import Animations from "./css/animations";

import Buttons from "./components/buttons";
import Cards from "./components/cards";
import Panels from "./components/panels";
import List from "./components/list";
import Progress from "./components/progress";
import Tabs from "./components/tabs";
import Tags from "./components/tags";
import DatePicker from "./components/datepicker";
import TimePicker from "./components/timepicker";
import Popover from "./components/popover";
import Tooltip from "./components/tooltips";
import Stepper from "./components/stepper";
import Pagination from "./components/pagination";
import Collapse from "./components/collapse";

import FBasic from "./forms/basic";
import FExtended from "./forms/extended";
import FValidation from "./forms/validation";

import Charts from "./others/charts";
import Alerts from "./others/alerts";
import Modals from "./others/modals";
import Sections from "./others/sections";
import Calendar from "./others/calendar";

const FourToFour = () => <h1 className="text-center">404</h1>;

// const permission = useSelector(state => state.permission);
// const dispatch = useDispatch();

class Routes extends React.Component {

  isLogged = () => useSelector(state => state.isLogged);

  requiresAuth = (Comp, match = "") => {
    if (this.isLogged || localStorage.getItem("token")) {
      return <Comp match={match} />;
    } else {
      return <Redirect to="/login" />
    }
  }

  render() {
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
        {/* {(permission === 1) && (<> */}
        <Route path="/staff/add-staff" exact render={({ match }) => this.requiresAuth(AddNewStaff, match)} />
        <Route path="/staff/all-staff" exact render={({ match }) => this.requiresAuth(AllStaff, match)} />
        <Route path="/staff/role-management" exact render={({ match }) => this.requiresAuth(RoleManagement, match)} />
        {/* </>)} */}

        {/* TRANSACTION LOG */}
        <Route path="/logs/expired-rent-log" exact render={({ match }) => this.requiresAuth(ExpiredRentLog, match)} />
        <Route
          path="/logs/merchant-payout-log"
          exact
          render={({ match }) => this.requiresAuth(MerchantPayoutLog, match)}
        />
        <Route path="/logs/referral-log" exact render={({ match }) => this.requiresAuth(ReferralLog, match)} />
        <Route
          path="/logs/warehousers-payment-log"
          exact
          render={({ match }) => this.requiresAuth(WareHousersPaymentLog, match)}
        />
        <Route path="/logs/withdrawal-log" exact render={({ match }) => this.requiresAuth(WithdrawalLog, match)} />

        {/* USER MANAGEMENT */}
        <Route path="/users/merchants" exact render={({ match }) => this.requiresAuth(AllMerchants, match)} />
        <Route path="/users/all-users" exact render={({ match }) => this.requiresAuth(AllUsers, match)} />
        <Route path="/users/warehousers" exact render={({ match }) => this.requiresAuth(AllWarehouser, match)} />
        <Route path="/users/banned-users" exact render={({ match }) => this.requiresAuth(BannedUsers, match)} />



        {/* The theme's route starts here */}

        <Route path="/pages/invoice" exact component={Invoice} />
        <Route path="/pages/customers" exact component={Customers} />
        <Route path="/pages/chat" exact component={Chat} />
        <Route path="/pages/page-creator" exact component={PageCreator} />

        <Route path="/profile/v1" exact component={PV1} />
        <Route path="/profile/v2" exact component={PV2} />
        <Route path="/profile/extended" exact component={PExtended} />

        <Route path="/css/grid" exact component={Grid} />
        <Route path="/css/utilities" exact component={Utilities} />
        <Route path="/css/code" exact component={Code} />
        <Route path="/css/icons" exact component={Icons} />
        <Route path="/css/images" exact component={Images} />
        <Route path="/css/typography" exact component={Typography} />
        <Route path="/css/colors" exact component={Colors} />
        <Route path="/css/shadows" exact component={Shadows} />
        <Route path="/css/masks" exact component={Masks} />
        <Route path="/css/hover" exact component={Hover} />
        <Route path="/css/media" exact component={MediaObject} />
        <Route path="/css/animations" exact component={Animations} />

        <Route path="/components/buttons" exact component={Buttons} />
        <Route path="/components/cards" exact component={Cards} />
        <Route path="/components/panels" exact component={Panels} />
        <Route path="/components/list" exact component={List} />
        <Route path="/components/progress" exact component={Progress} />
        <Route path="/components/tabs" exact component={Tabs} />
        <Route path="/components/tags" exact component={Tags} />
        <Route path="/components/date" exact component={DatePicker} />
        <Route path="/components/time" exact component={TimePicker} />
        <Route path="/components/popovers" exact component={Popover} />
        <Route path="/components/tooltips" exact component={Tooltip} />
        <Route path="/components/stepper" exact component={Stepper} />
        <Route path="/components/pagination" exact component={Pagination} />
        <Route path="/components/collapse" exact component={Collapse} />

        <Route path="/tables/basic" exact component={TBasic} />
        <Route path="/tables/extended" exact component={TExtended} />
        <Route path="/tables/datatable" exact component={Datatable} />

        <Route path="/maps/google" exact component={Google} />
        <Route path="/maps/full" exact component={MFull} />
        <Route path="/maps/vector" exact component={Vector} />

        <Route path="/forms/basic" exact component={FBasic} />
        <Route path="/forms/extended" exact component={FExtended} />
        <Route path="/forms/validation" exact component={FValidation} />

        <Route path="/charts" exact component={Charts} />
        <Route path="/alerts" exact component={Alerts} />
        <Route path="/modals" exact component={Modals} />
        <Route path="/sections" exact component={Sections} />
        <Route path="/calendar" exact component={Calendar} />

        <Route render={({ location }) => {
          if (location.pathname === "/login") return <Redirect to="/" />;
          return <FourToFour />
        }} />
      </Switch>
    );
  }
}

export default Routes;
