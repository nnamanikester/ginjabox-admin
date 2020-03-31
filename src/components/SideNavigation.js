import React from "react";
import {
  MDBSideNavLink,
  MDBSideNavCat,
  MDBSideNavNav,
  MDBSideNav,
  MDBIcon
} from "mdbreact";

class SideNavigation extends React.Component {
  // render MDBSideNav Link
  rSNL(to, text, icon) {
    return (
      <MDBSideNavLink to={to} onClick={this.props.onLinkClick}>
        <MDBIcon icon={`${icon} mr-2`} />
        {text}
      </MDBSideNavLink>
    );
  }

  render() {
    const { onLinkClick } = this.props;
    return (
      <div className="white-skin">
        <MDBSideNav
          logo="https://mdbootstrap.com/img/Marketing/general/logo/medium/mdb-react.png"
          bg="https://mdbootstrap.com/img/Photos/Others/sidenav4.jpg"
          mask="strong"
          fixed
          breakWidth={this.props.breakWidth}
          triggerOpening={this.props.triggerOpening}
          style={{ transition: "padding-left .3s" }}
        >
          <form role="search" className="search-form">
            <div className="form-group md-form mt-0 pt-1 ripple-parent">
              <input
                type="text"
                placeholder="Search"
                className="form-control"
              />
            </div>
          </form>
          <MDBSideNavNav>
            <MDBSideNavLink exact topLevel to="/" onClick={onLinkClick}>
              <MDBIcon icon="tachometer-alt mr-2" />
              Dashboard
            </MDBSideNavLink>

            <MDBSideNavCat name="User Management" id="user-cat" icon="users">
              {this.rSNL("/users/all-users", "All Users", "users")}
              {this.rSNL("/users/merchants", "All Merchants", "users")}
              {this.rSNL("/users/warehousers", "All Warehousers", "users")}
              {this.rSNL("/users/banned-users", "Banned Users", "ban")}
            </MDBSideNavCat>

            <MDBSideNavCat
              name="Transaction Log"
              id="transaction-cat"
              icon="filter"
            >
              {this.rSNL(
                "/logs/merchant-payout-log",
                "Merchant Payout Log",
                "history"
              )}
              {this.rSNL(
                "/logs/warehousers-payment-log",
                "Warehouse Payment Log",
                "history"
              )}
              {this.rSNL("/logs/withdrawal-log", "Withdrawal Log", "history")}
              {this.rSNL(
                "/logs/expired-rent-log",
                "Expired Rent Log",
                "history"
              )}
              {this.rSNL("/logs/referral-log", "Referral Log", "history")}
            </MDBSideNavCat>

            <MDBSideNavCat name="Inventory Log" id="inventory-cat" icon="sort">
              {this.rSNL(
                "/logs/dispatch-order-log",
                "Dispatch Order Log",
                "history"
              )}
              {this.rSNL(
                "/logs/rejected-stock-log",
                "Rejected Stock Log",
                "history"
              )}
              {this.rSNL(
                "/logs/stock-receipt-log",
                "Stock Receipt Log",
                "history"
              )}
            </MDBSideNavCat>

            <MDBSideNavCat name="Staff Management" id="staff-cat" icon="staff">
              {this.rSNL("/staff/add-staff", "Add Staff")}
              {this.rSNL("/staff/all-staff", "All Staff")}
              {this.rSNL("/staff/role-management", "Role Management")}
            </MDBSideNavCat>

            <MDBSideNavCat name="Settings" id="settings-cat" icon="cog">
              {this.rSNL(
                "/settings/email-settings",
                "Email Setting",
                "envelope"
              )}
              {this.rSNL("/settings/sms-settings", "SMS Setting", "sms")}
              {this.rSNL("/settings/edit-password", "Edit Password", "lock")}
            </MDBSideNavCat>

            {/* THEME EXAMPLES */}
            <MDBSideNavCat
              name="Dashboards"
              id="dashboard-cat"
              icon="tachometer-alt"
            >
              {this.rSNL("/dashboards/v1", "Version 1")}
              {this.rSNL("/dashboards/v2", "Version 2")}
              {this.rSNL("/dashboards/v3", "Version 3")}
              {this.rSNL("/dashboards/v4", "Version 4")}
              {this.rSNL("/dashboards/v5", "Version 5")}
              {this.rSNL("/dashboards/v6", "Version 6")}
            </MDBSideNavCat>

            <MDBSideNavCat name="Pages" id="pages-cat" icon="image">
              {this.rSNL("/pages/login", "Login")}
              {this.rSNL("/pages/register", "Register")}
              {this.rSNL("/pages/pricing", "Pricing")}
              {this.rSNL("/pages/lock", "Lock")}
              {this.rSNL("/pages/about", "About us")}
              {this.rSNL("/pages/post", "Single post")}
              {this.rSNL("/pages/posts", "Post listing")}
              {this.rSNL("/pages/landing", "Landing page")}
              {this.rSNL("/pages/customers", "Customers")}
              {this.rSNL("/pages/invoice", "Invoice")}
              {this.rSNL("/pages/chat", "Chat")}
              {this.rSNL("/pages/support", "Support")}
              {this.rSNL("/pages/page-creator", "Page creator")}
            </MDBSideNavCat>

            <MDBSideNavCat name="Profile" id="profile-cat" icon="user">
              {this.rSNL("/profile/v1", "Basic 1")}
              {this.rSNL("/profile/v2", "Basic 2")}
              {this.rSNL("/profile/extended", "Extended")}
            </MDBSideNavCat>

            <MDBSideNavCat name="CSS" id="css-cat" iconBrand icon="css3">
              {this.rSNL("/css/grid", "Grid system")}
              {this.rSNL("/css/media", "Media object")}
              {this.rSNL("/css/utilities", "Utilities")}
              {this.rSNL("/css/code", "Code")}
              {this.rSNL("/css/icons", "Icons")}
              {this.rSNL("/css/images", "Images")}
              {this.rSNL("/css/typography", "Typography")}
              {this.rSNL("/css/colors", "Colors")}
              {this.rSNL("/css/masks", "Masks")}
              {this.rSNL("/css/hover", "Hover effects")}
              {this.rSNL("/css/shadows", "Shadows")}
              {this.rSNL("/css/animations", "Animations")}
            </MDBSideNavCat>

            <MDBSideNavCat name="Components" id="components-cat" icon="th">
              {this.rSNL("/components/buttons", "Buttons")}
              {this.rSNL("/components/cards", "Cards")}
              {this.rSNL("/components/list", "List group")}
              {this.rSNL("/components/panels", "Panels")}
              {this.rSNL("/components/progress", "Progress bars")}
              {this.rSNL("/components/popovers", "Popovers")}
              {this.rSNL("/components/tooltips", "Tooltips")}
              {this.rSNL("/components/tabs", "Tabs & pills")}
              {this.rSNL("/components/tags", "Tags, labels & badges")}
              {this.rSNL("/components/date", "Date picker")}
              {this.rSNL("/components/time", "Time picker")}
              {this.rSNL("/components/stepper", "Stepper")}
              {this.rSNL("/components/pagination", "Pagination")}
              {this.rSNL("/components/collapse", "Collapse")}
            </MDBSideNavCat>

            <MDBSideNavCat name="Forms" id="forms-cat" icon="check-square">
              {this.rSNL("/forms/basic", "Basic")}
              {this.rSNL("/forms/extended", "Extended")}
              {this.rSNL("/forms/validation", "Validation")}
            </MDBSideNavCat>

            <MDBSideNavCat name="Tables" id="tables-cat" icon="table">
              {this.rSNL("/tables/basic", "Basic")}
              {this.rSNL("/tables/extended", "Extended")}
              {this.rSNL("/tables/datatable", "Datatable")}
            </MDBSideNavCat>

            <MDBSideNavCat name="Maps" id="maps-cat" icon="map">
              {this.rSNL("/maps/google", "Google")}
              {this.rSNL("/maps/full", "Full screen map")}
              {this.rSNL("/maps/vector", "Vector world map")}
            </MDBSideNavCat>

            <MDBSideNavLink topLevel to="/alerts" onClick={onLinkClick}>
              <MDBIcon icon="bell mr-2" />
              Alerts
            </MDBSideNavLink>

            <MDBSideNavLink topLevel to="/modals" onClick={onLinkClick}>
              <MDBIcon icon="bolt mr-2" />
              Modals
            </MDBSideNavLink>

            <MDBSideNavLink topLevel to="/charts" onClick={onLinkClick}>
              <MDBIcon icon="chart-pie mr-2" />
              Charts
            </MDBSideNavLink>

            <MDBSideNavLink topLevel to="/calendar" onClick={onLinkClick}>
              <MDBIcon icon="calendar-check mr-2" />
              Calendar
            </MDBSideNavLink>

            <MDBSideNavLink topLevel to="/sections" onClick={onLinkClick}>
              <MDBIcon icon="th-large mr-2" />
              Sections
            </MDBSideNavLink>
          </MDBSideNavNav>
        </MDBSideNav>
      </div>
    );
  }
}

export default SideNavigation;
