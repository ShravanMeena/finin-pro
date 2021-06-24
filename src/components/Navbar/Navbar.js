import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "../../globalStyles";
// import { Link } from "react-router-dom";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink,
  NavRouteLinks,
} from "./Navbar.style";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(false);

  const handleClick = () => setClick(!click);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <>
      <IconContext.Provider value={{ color: "#36e2a3" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/' onClick={() => setClick(false)}>
              Finin
              <NavIcon />
              Pro
            </NavLogo>

            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>

            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks href='https://letsfinin.medium.com/' target='_blank'>
                  Blog
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks
                  href='https://angel.co/company/finin/jobs'
                  target='_blank'>
                  Careers
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks href='https://build.finin.in/' target='_blank'>
                  Community
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavRouteLinks to='/contact'>Contact</NavRouteLinks>
              </NavItem>

              <NavItemBtn>
                <NavBtnLink to='/'>
                  {button ? (
                    <Button primary textprimary>
                      Join Us
                    </Button>
                  ) : (
                    <Button fontBig primary textprimary>
                      Join Us
                    </Button>
                  )}
                </NavBtnLink>
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}
