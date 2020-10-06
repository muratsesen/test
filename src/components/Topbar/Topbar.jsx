import React, { useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink, Router } from 'react-router-dom';
import "./Topbar.css";
const Topbar = ({ page,onPageChange }) => {

  const [scrolled, setScrolled] = React.useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    //window.addEventListener("scroll", handleScroll);
  });
  let navbarClasses = ["navbar"];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }
  return (
    <Navbar
      className={navbarClasses.join(" ")}
      expand="md"
      variant="dark"
    >
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
      
          <NavLink exact activeClassName='active-link' to="/">HOME</NavLink>
          <NavLink exact activeClassName='active-link' to="/segment">SEGMENT</NavLink>
          <NavLink exact activeClassName='active-link' to="/guestbook">GUESTBOOK</NavLink>
      
        </Nav>
        
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Topbar;
