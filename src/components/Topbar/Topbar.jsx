import React, { useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Topbar.css";
const Topbar = ({ page }) => {
  console.log("x:",window.screenX);
  console.log("y:",window.screenY);
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
    window.addEventListener("scroll", handleScroll);
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
          <Nav.Link href="#home">HOME</Nav.Link>
          <Nav.Link href="#segment">SEGMENT</Nav.Link>
          <Nav.Link href="#guestbook">GUESTBOOK</Nav.Link>
        </Nav>
        
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Topbar;
