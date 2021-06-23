import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "../../globalStyles";
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
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/'>
              Finin
              <NavIcon />
              Pro
            </NavLogo>

            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>

            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to='/blog'>Blog</NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to='/about'>Careers</NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to='/contact'>Community</NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to='/contact'>Contact Us</NavLinks>
              </NavItem>

              <NavItemBtn>
                <NavBtnLink to='/sign-up'>
                  {button ? (
                    <Button primary>Signup</Button>
                  ) : (
                    <Button fontBig primary>
                      Signup
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
