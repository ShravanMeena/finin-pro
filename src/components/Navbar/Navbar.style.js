import styled from "styled-components";
import { Container } from "../../globalStyles";
import { FaPhoenixFramework } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  background-color: #000000;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 1;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 100px;
  ${Container}
`;

export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

export const NavIcon = styled(FaPhoenixFramework)`
  margin-right: 0.5rem;
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 12px;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 2rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 100px;
    right: ${({ click }) => (click ? 0 : "100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background-color: #000000;
  }
`;

export const NavItem = styled.li`
  height: 100px;
  /* border-bottom: 2px solid transparent; */

  &:hover {
    /* border-bottom: 2px solid red; */
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
`;

export const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  padding: 0 1.4rem;

  &:hover {
    transition: all 0.3s ease;
    color: #36e2a3;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    text-align: center;
    padding: 2rem;
    display: table;
    &:hover {
      color: #36e2a3;
      transition: all 0.3s ease;
    }
  }
`;

export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 120px;
  }
`;

export const NavBtnLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  padding: 8px 16px;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
`;
