import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Colors from "../utils/Colors";

const FooterWrapper = styled.div`
  height: 200px;
  background: ${Colors.Primary};
  border-top: 1px solid ${Colors.Border};

  @media (max-width: 776px) {
    height: auto;
  }
`;

const FooterInner = styled.div`
  max-width: 1400px;
  padding: 0 80px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;

  @media (max-width: 776px) {
    padding: 32px 0;

    flex-direction: column;
  }
`;

const Nav = styled.nav``;

const List = styled.ul`
  display: flex;

  @media (max-width: 776px) {
    text-align: center;
  }
`;

const ListItem = styled.li`
  margin-right: 16px;
  display: inline-block;
  /* padding-top: 8px; */
  list-style: none;
  /* margin-top: ${({ mt }) => (mt ? `8px` : 0)};
  padding-top: ${({ pt }) => (pt ? `16px` : 0)}; */
  &:last-child {
    margin-right: 0;

    
  }

  @media (max-width: 776px) {
    margin: 0;
    padding-bottom: 16px;
    &:last-child{
      padding-bottom: 0;
    }
  }

/* 
  &.active {
    text-decoration: underline;

  } */

`;

const ListLink = styled(NavLink)`
  color: inherit;
  text-decoration: none;

  &:visited {
    color: inherit;
  }

  &:hover {
    text-decoration: underline;
  }

  &.is-active {
    text-decoration: underline;
  }
`;

const CopyRight = styled.p`
  padding-top: 16px;
  padding-bottom: 16px;
`;

const Footer = () => (
  <FooterWrapper>
    <FooterInner>
      <Nav>
        <List>
          <ListItem>
            <ListLink exact to="/privacy" activeClassName="is-active">
              Privacy Policy
            </ListLink>
          </ListItem>
          <ListItem>
            <ListLink exact to="/help" activeClassName="is-active">
              Help
            </ListLink>
          </ListItem>
        </List>
      </Nav>
      <CopyRight>© Schroeders Art Inc. All rights reserved.</CopyRight>
      <Nav>
        <List>
          <ListItem>
            <ListLink exact to="/login" activeClassName="is-active">
              Login
            </ListLink>
          </ListItem>
          <ListItem>
            <ListLink exact to="/register" activeClassName="is-active">
              Register
            </ListLink>
          </ListItem>
        </List>
      </Nav>
    </FooterInner>
  </FooterWrapper>
);

export default Footer;
