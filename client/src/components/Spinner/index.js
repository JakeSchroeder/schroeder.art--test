import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
`;

const StyledSpinner = styled.div`
  position: absolute;
  top: 200px;
  left: 50%;
  margin-left: -32px;
  margin-top: -32px;
  width: 64px;
  height: 64px;
  z-index: 10;
  border-radius: 5px;
  background-color: #000;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 51px;
    height: 51px;
    margin: 6px;
    border: 6px solid #fff;
    border-radius: 50%;
    animation: ${spin} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fff transparent transparent transparent;

    &:nth-child(1) {
      animation-delay: -0.45s;
    }
    &:nth-child(2) {
      animation-delay: -0.3s;
    }
    &:nth-child(3) {
      animation-delay: -0.15s;
    }
  }
`;

export default () => (
  <StyledSpinner>
    <div />
    <div />
    <div />
    <div />
  </StyledSpinner>
);
