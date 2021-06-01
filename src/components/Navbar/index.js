import React, {useState, useEffect} from "react";
import {
  Nav,
  NavContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./Navbar";
import { FaBars } from "react-icons/fa";
import logo from "../../alogo.png"

const Navbar = ({toggle}) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  })

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavContainer>
          <NavLogo><img src={logo}/></NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="projects">Projects</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact">Contact</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="#">Resume</NavLinks>
            </NavItem>
          </NavMenu>

        </NavContainer>
      </Nav>
    </>
  );
};

export default Navbar;
