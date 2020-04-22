import React from "react";
import styled from "styled-components";

const StyledLogo = styled.a`
  float: left;
  margin-left: 15px;
  text-align: left;
  font-weight: 700;
  font-size: 35px;
  color: #ffe01a;

  &:hover,
  &:active,
  &:focus,
  &:visited {
    color: #ffe01a;
  }
`;

const StyledLogoHighlight = styled.span``;

const StyledLogoText = styled.small`
  display: block;
  font-size: 11px;
  color: #fff;
  font-weight: 400;
`;

function Logo() {
  return (
    <StyledLogo href="/">
      Work<StyledLogoHighlight>Safe</StyledLogoHighlight>
      <StyledLogoText>Creating smart and secure work places</StyledLogoText>
    </StyledLogo>
  );
}

export default Logo;
