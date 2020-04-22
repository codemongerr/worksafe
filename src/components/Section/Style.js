import styled, { css } from "styled-components";

export const StyledSectionHeading = styled.h2`
  font-size: 45px;
  font-weight: 700;
  margin: 25px 0 0 0;
`;

export const StyledSection = styled.section`
  position: relative;
  padding: 20px 15px;
  width: 100%;
  max-width: 1300px;
  margin: 20px auto;
`;

export const StyledSectionList = styled.div`
  -ms-flex-line-pack: start;
  align-content: flex-start;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: none;

  @media (max-width: 767px) {
    -ms-flex-preferred-size: auto;
    flex-basis: auto;
  }
`;

export const StyledSectionListItem = styled.div`
  margin: 0;
  padding: 0 0 3em;
  ${(props) => {
    return (
      !props.fluid &&
      css`
        -ms-flex-item-align: start;
        align-self: flex-start;
        -webkit-box-flex: 0;
        flex: 0 1 30%;
      `
    );
  }}

  ${(props) => {
    return (
      props.fluid &&
      css`
        font-size: 1.2rem;
      `
    );
  }}
`;

export const StyledSectionListItemTitle = styled.h3`
  color: #808080;
  display: block;
  margin: 0 0 1em;
  font-size: 0.9em;
  font-weight: 400;

  a,
  span {
    margin-right: 0.25em;
    border-bottom: 1px dotted currentColor;
  }
`;

export const StyledSectionListItemDetail = styled.div`
  color: #000;
  font-size: 0.83em;
  line-height: 1.6;
`;
