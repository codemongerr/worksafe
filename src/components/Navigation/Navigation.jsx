import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import Icon from "../Icon";

export const NavigationLink = styled(Link)`
  color: #fff;
  display: inline-block;
  text-transform: uppercase;
  font-weight: 600;
  transition: all 300ms ease-in-out;

  &:hover {
    color: #ffe01a;
  }

  @media screen and (max-width: 991px) {
    display: block;
    font-size: 18px;
    padding: 15px 0;
    border-top: 1px solid #fff;

    &:first-child {
      border: none;
    }
  }

  @media screen and (min-width: 992px) {
    padding: 0 15px;
  }
`;

export const NavigationAnchor = styled.a`
  color: #fff;
  display: inline-block;
  text-transform: uppercase;
  font-weight: 600;
  transition: all 300ms ease-in-out;

  &:hover {
    color: #ffe01a;
  }

  @media screen and (max-width: 991px) {
    display: block;
    font-size: 18px;
    padding: 15px 0;
    border-top: 1px solid #fff;

    &:first-child {
      border: none;
    }
  }

  @media screen and (min-width: 992px) {
    padding: 0 15px;
  }
`;

const StyledNavigationToggle = styled.a`
display: none;
@media screen and (max-width: 991px) {
  display: inline-block
  margin-right: 15px;
  font-size: 30px;
  margin-top: 10px;
}
`;

const StyledNavigation = styled.nav`
  @media screen and (max-width: 991px) {
    text-align: left;
    posiion: absolute;
    left: 0;
    top: 100%;
    background: #000;
    clear: both;
    padding: 15px;
    display: ${(props) => (props.isOpen ? "block" : "none")};
  }

  @media screen and (min-width: 992px) {
    margin-top: 23px;
  }
`;

function Navigation({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = (event) => {
    event.preventDefault();
    setIsOpen(!isOpen);
  };
  return (
    <Fragment>
      <StyledNavigationToggle href="#" onClick={handleToggle}>
        <Icon name="bars" />
      </StyledNavigationToggle>
      <StyledNavigation isOpen={isOpen}>{children}</StyledNavigation>
    </Fragment>
  );
}

export default Navigation;
