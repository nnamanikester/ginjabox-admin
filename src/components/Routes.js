import React from "react";
import { Route, Switch } from "react-router-dom";

// PAGES
import E404 from "../pages/E404";
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
import Management from "../pages/StaffManagement/Management";
import SuperAdmin from "../pages/StaffManagement/SuperAdmin";
import Support from "../pages/StaffManagement/Support";
import TeamLead from "../pages/StaffManagement/TeamLead";

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

import DV1 from "./dashboard/v1";
import DV2 from "./dashboard/v2";
import DV3 from "./dashboard/v3";
import DV4 from "./dashboard/v4";
import DV5 from "./dashboard/v5";
import DV6 from "./dashboard/v6";

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

const fourtOFour = () => <h1 className="text-center">404</h1>;

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route
          path="/email-notifications"
          exact
          component={EmailNotifications}
        />
        <Route
          path="/user/:username"
          exact
          component={SingleUser}
        />

        {/* INVENTORY LOG */}
        <Route
          path="/logs/dispatch-order-log"
          exact
          component={DispatchOrderLog}
        />
        <Route
          path="/logs/rejected-stock-log"
          exact
          component={RejectedStockLog}
        />
        <Route
          path="/logs/stock-receipt-log"
          exact
          component={StockReceiptLog}
        />

        {/* SETTINGS */}
        <Route path="/settings/edit-password" exact component={EditPassword} />
        <Route
          path="/settings/email-settings"
          exact
          component={EmailSettings}
        />
        <Route path="/settings/sms-settings" exact component={SmsSettings} />

        {/* STAFF MANAGEMENT */}
        <Route path="/staff/add-staff" exact component={AddNewStaff} />
        <Route path="/staff/all-staff" exact component={AllStaff} />
        <Route path="/staff/management" exact component={Management} />
        <Route path="/staff/super-admin" exact component={SuperAdmin} />
        <Route path="/staff/support" exact component={Support} />
        <Route path="/staff/team-lead" exact component={TeamLead} />

        {/* TRANSACTION LOG */}
        <Route path="/logs/expired-rent-log" exact component={ExpiredRentLog} />
        <Route
          path="/logs/merchant-payout-log"
          exact
          component={MerchantPayoutLog}
        />
        <Route path="/logs/referral-log" exact component={ReferralLog} />
        <Route
          path="/logs/warehousers-payment-log"
          exact
          component={WareHousersPaymentLog}
        />
        <Route path="/logs/withdrawal-log" exact component={WithdrawalLog} />

        {/* USER MANAGEMENT */}
        <Route path="/users/merchants" exact component={AllMerchants} />
        <Route path="/users/all-users" exact component={AllUsers} />
        <Route path="/users/warehousers" exact component={AllWarehouser} />
        <Route path="/users/banned-users" exact component={BannedUsers} />

        {/* The theme's route starts here */}

        <Route path="/dashboards/v1" component={DV1} />
        <Route path="/dashboards/v2" component={DV2} />
        <Route path="/dashboards/v3" exact component={DV3} />
        <Route path="/dashboards/v4" exact component={DV4} />
        <Route path="/dashboards/v5" exact component={DV5} />
        <Route path="/dashboards/v6" exact component={DV6} />

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

        <Route component={fourtOFour} />
      </Switch>
    );
  }
}

export default Routes;
