import React from "react";
import {
  MDBSideNavLink,
  MDBSideNavCat,
  MDBSideNavNav,
  MDBSideNav,
  MDBIcon
} from "mdbreact";
import Logo from "../assets/ginjabox.png";
import { connect } from "react-redux";
import { getPermission } from "../Redux/actions/permission";

// const permission = useSelector(state => state.permission);
// const dispatch = useDispatch();

const mapStateToProps = state => ({
  permit: state.permission
})

const mapDispatchToProps = dispatch => {
  return {
    permission: () => dispatch(getPermission())
  }
}

class SideNavigation extends React.Component {

  componentWillMount() {
    this.props.permission();
  }

  rSNL(to, text, icon) {
    return (
      <MDBSideNavLink to={to} onClick={this.props.onLinkClick}>
        <MDBIcon icon={`${icon} mr-2`} />
        {text}
      </MDBSideNavLink>
    );
  }

  render() {
    const { onLinkClick, permit } = this.props;
    return (
      <div className="white-skin">
        <MDBSideNav
          logo={Logo}
          bg="https://mdbootstrap.com/img/Photos/Others/sidenav4.jpg"
          mask="strong"
          fixed
          breakWidth={this.props.breakWidth}
          triggerOpening={this.props.triggerOpening}
          style={{ transition: "padding-left .3s" }}
        >
          <MDBSideNavNav>
            <MDBSideNavLink exact topLevel to="/" onClick={onLinkClick}>
              <MDBIcon icon="tachometer-alt mr-2" />
              Dashboard
            </MDBSideNavLink>

            <MDBSideNavCat name="Listing Management" id="user-cat" icon="list">
              {this.rSNL("/listings", "All Lisitngs", "list")}
              {this.rSNL("/listings/available-listings", "Available Listings", "list")}
              {this.rSNL("/listings/requisitions", "All Requisitions", "list")}
              {this.rSNL("/listings/expired-listings", "Expired Listings", "list")}
            </MDBSideNavCat>

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

            <MDBSideNavCat name="Staff Management" id="staff-cat" icon="tasks">
              {this.rSNL("/staff/add-staff", "Add Staff", "plus")}
              {this.rSNL("/staff/all-staff", "All Staff", "users")}
              {this.rSNL("/staff/role-management", "Role Management", "tasks")}
            </MDBSideNavCat>

            <MDBSideNavLink exact topLevel to="/email-notification">
              <MDBIcon icon="envelope mr-2" />
              Email Notification
            </MDBSideNavLink>

            <MDBSideNavCat name="Settings" id="settings-cat" icon="cog">
              {this.rSNL(
                "/settings/email-settings",
                "Email Setting",
                "envelope"
              )}
              {this.rSNL("/settings/sms-settings", "SMS Setting", "sms")}
              {this.rSNL("/settings/edit-password", "Edit Password", "lock")}
            </MDBSideNavCat>

          </MDBSideNavNav>
        </MDBSideNav>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideNavigation);
