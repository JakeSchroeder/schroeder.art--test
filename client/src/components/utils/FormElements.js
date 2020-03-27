import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import Colors from "./Colors";

export const AuthTitle = styled.h1`
  text-align: center;
  margin-bottom: 32px;
`;

export const AuthDescription = styled.p`
  text-align: center;
  margin-bottom: 32px;
`;

export const StyledForm = styled.form`
  padding-top: 32px;
  border-top: 1px solid ${Colors.Border};
  max-width: 600px;
  margin: 0 auto;
`;

export const StyledInputWrapper = styled.div`
  width: 100%;
  margin-right: ${({ ymR }) => (ymR ? `16px` : `0`)};
  margin-left: ${({ ymL }) => (ymL ? `16px` : `0`)};
  margin-bottom: ${({ nmB }) => (nmB ? `0` : `32px`)};
  &:last-child {
    margin-bottom: 0;
  }

  display: flex;
  flex-direction: ${({ horizontal }) => (horizontal ? `row` : `column`)};
  justify-content: space-between;
  align-items: ${({ alignCenter }) => (alignCenter ? `center` : `flex-start`)};
`;

export const StyledLabel = styled.label`
  display: block;
  margin-bottom: 16px;
  font-size: 1.8rem;
  font-family: germania-one, sans-serif;
`;

export const StyledInput = styled.input`
  line-height: 70px;
  font-size: 1.8rem;
  font-family: alegreya, serif;
  height: 70px;
  padding: 16px;
  width: 100%;
  background: ${Colors.White};
  border: 1px solid ${Colors.Border};
  outline: 0;
  transition: border-color 0.5s ease;

  &:focus {
    border-color: ${Colors.Primary};
    transition: border-color 0.5s ease;
  }
`;

export const StyledErrors = styled.p`
  color: ${Colors.Primary};
`;

export const StyledNavLink = styled(NavLink)``;

export const StyledSubmitButton = styled.button`
  font-size: 1.8rem;
  height: 70px;
  padding: 0 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${Colors.White};

  background: ${Colors.Gray};
  color: ${Colors.White};

  &:focus {
    border-color: ${Colors.Primary};
  }
`;
