import React from "react";
import styled from "styled-components";
import Icon from "../Icon";

const StyledFeatureIcon = styled.span`
  display: block;
  position: absolute;
  left: 15px;
  top: 13px;
  font-size: 35px;
`;

export const Feature = styled.div`
  position: relative;
  padding: 25px 15px 25px 70px;
  height: 115px;
  background: rgba(255, 224, 26, 0.2);
  border-radius: 10px;
  margin-bottom: 25px;

  @media screen and (min-width: 992px) {
    width: 31%;
    float: left;
    margin-left: 15px;
    margin-right: 10px;
  }
`;

export const FeatureIcon = ({ name }) => {
  return (
    <StyledFeatureIcon>
      <Icon name={name} />
    </StyledFeatureIcon>
  );
};

export const FeatureHeading = styled.h3`
  margin: 0;
  padding: 0;
  opacity: 0.8;
`;

const FeatureList = styled.div`
  margin: 20px 5px;
  &:after {
    display: block;
    content: "";
    clear: both;
  }

  @media screen and (min-width: 992px) {
    margin: 20px -15px;
  }
`;

export default FeatureList;
