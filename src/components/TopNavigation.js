import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBIcon,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBBadge
} from "mdbreact";
import { useDispatch } from "react-redux";
import { LogOut } from "../Redux/actions/authentication";
import { Redirect } from "react-router"

const TopNavigation = (props) => {

  const dispatch = useDispatch();

  const navStyle = {
    paddingLeft: props.toggle ? "16px" : "240px",
    transition: "padding-left .3s"
  };

  const handleToggleClickA = () => {
    props.onSideNavToggleClick();
  }

  const logout = () => {
    localStorage.clear();
    dispatch(LogOut());
    return <Redirect to="/login" />;
  }

  return (
    <Router>
      <MDBNavbar
        className="flexible-MDBNavbar"
        light
        expand="md"
        scrolling
        fixed="top"
        style={{ zIndex: 3 }}
      >
        <div
          onClick={() => handleToggleClickA()}
          key="sideNavToggleA"
          style={{
            lineHeight: "32px",
            marginleft: "1em",
            verticalAlign: "middle",
            cursor: "pointer"
          }}
        >
          <MDBIcon icon="bars" color="white" size="lg" />
        </div>

        <MDBNavbarBrand href="/" style={navStyle}>
          <strong>{props.routeName}</strong>
        </MDBNavbarBrand>

        <MDBNavbarNav expand="sm" right style={{ flexDirection: "row" }}>
          <MDBDropdown>
            <MDBDropdownToggle nav caret>
              <MDBBadge color="red" className="mr-2">
                3
                </MDBBadge>
              <MDBIcon icon="bell" />{" "}
              <span className="d-none d-md-inline">Notifications</span>
            </MDBDropdownToggle>
            <MDBDropdownMenu right style={{ minWidth: "400px" }}>
              <MDBDropdownItem href="#!">
                <MDBIcon icon="money-bill-alt" className="mr-2" />
                  New order received
                  <span className="float-right">
                  <MDBIcon icon="clock" /> 13 min
                  </span>
              </MDBDropdownItem>
              <MDBDropdownItem href="#!">
                <MDBIcon icon="money-bill-alt" className="mr-2" />
                  New order received
                  <span className="float-right">
                  <MDBIcon icon="clock" /> 33 min
                  </span>
              </MDBDropdownItem>
              <MDBDropdownItem href="#!">
                <MDBIcon icon="chart-line" className="mr-2" />
                  Your campaign is about to end
                  <span className="float-right">
                  <MDBIcon icon="clock" /> 53 min
                  </span>
              </MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
          <MDBDropdown>
            <MDBDropdownToggle nav caret>
              <MDBIcon icon="user" />{" "}
              <span className="d-none d-md-inline">Profile</span>
            </MDBDropdownToggle>
            <MDBDropdownMenu right style={{ minWidth: "200px" }}>
              <MDBDropdownItem onClick={() => logout()}>Log Out</MDBDropdownItem>
              <MDBDropdownItem>My Account</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </MDBNavbarNav>
      </MDBNavbar>
    </Router>
  );
}

export default TopNavigation;
