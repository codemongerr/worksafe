import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const NavigationLink = styled(Link)`
  color: #fff;
  display: inline-block;
  padding: 15px;
  font-weight: 600;
  transition: all 300ms ease-in-out;

  &:hover {
    color: #ffe01a;
  }
`;

export const NavigationAnchor = styled.a`
  color: #fff;
  display: inline-block;
  padding: 15px;
  font-weight: 600;
  transition: all 300ms ease-in-out;

  &:hover {
    color: #ffe01a;
  }
`;

const Navigation = styled.nav`
  color: #fff;
  background: rgba(0, 0, 0, 0.8);
  text-align: right;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 9999;
`;

export default Navigation;
