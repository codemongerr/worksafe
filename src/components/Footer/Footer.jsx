import React from "react";
import styled from "styled-components";

const StyledFooterCopyrights = styled.p``;

const StyledFooter = styled.footer`
  padding: 10px 15px;
  text-align: center;
  background: #fff;
`;

function Footer() {
  return (
    <StyledFooter>
      <StyledFooterCopyrights>
        <strong>&copy; Copyright 2020 WorkSafe | All Rights Reserved.</strong>
      </StyledFooterCopyrights>
    </StyledFooter>
  );
}

export default Footer;
