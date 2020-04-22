import React from "react";
import styled, { css } from "styled-components";

// Simple styled button component
const Button = styled.button`
  display: inline-block;
  font-size: 16px;
  background-color: transparent;
  border: none;
  text-decoration: none;
  cursor: pointer;
  padding: 0 20px;
  height: 45px;
  line-height: 48px;
  white-space: nowrap;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: ${(props) => props.theme.fontSerif};
  font-weight: 700;
  transition: all 250ms ease-in-out;
  ${(props) => {
    return (
      props.variant === "default" &&
      css`
        background-color: ${(props) => props.theme.color.yellow};
        color: ${(props) => props.theme.color.black};

        &:hover {
          background-color: ${(props) => props.theme.color.black};
          color: ${(props) => props.theme.color.white};
        }
      `
    );
  }}
  ${(props) => {
    return (
      props.variant === "ghost-green" &&
      css`
        border: 1px solid ${(props) => props.theme.color.green};
        color: ${(props) => props.theme.color.green};

        &:hover {
          background-color: ${(props) => props.theme.color.green};
          color: ${(props) => props.theme.color.white};
        }
      `
    );
  }}
`;
export default Button;
