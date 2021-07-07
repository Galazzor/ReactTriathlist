import React, { useState } from "react";
import logo from "../../assets/user.png";
import { useAuth } from "../AuthContext";
import { Link, useHistory } from "react-router-dom";
import { Nav, NavDropdown, Container } from "react-bootstrap";

export default function MainContent(props) {
  const [error, setError] = useState("");
  const { logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.pushState("/login");
    } catch (e) {
      setError("Failed to log out");
    }
  }

  return (
    <div className="main-content">
      <nav className="navbar">
        <div className="mr-auto"></div>
        <Nav>
          <NavDropdown
            title={
              <img
                src={logo}
                alt="Logo"
                style={{ height: "50px", marginRight: "0.5em" }}
              />
            }
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item as={Link} to="/profile">
              Profile
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/" onClick={handleLogout}>
              Log out
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </nav>
      <main>
        <Container className="content">{props.children}</Container>
      </main>
    </div>
  );
}
