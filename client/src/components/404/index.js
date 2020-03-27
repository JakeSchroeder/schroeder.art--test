import React from "react";
import { Link } from "react-router-dom";
import logo_src from "../../img/creature.png";
import styled from "styled-components";

const Logo = styled.img`
  width: 100%;
  max-width: 400px;
  display: block;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  text-align: center;
`;

const StyledLink = styled(Link)`
  display: block;
  margin-top: 16px;
`;

const NotFound = () => (
  <Wrapper>
    <Link to="/">
      <Logo src={logo_src} alt="Schroeder's Art logo" />
    </Link>
    <br />
    <h2>Oops!... You Shouldn't Be Here</h2>
    <br />
    <p>We can't find that page :(</p>
    <br />
    <p>
      Either the url you typed in is incorrect, you do not have access /
      privileges to see this page, or the page you are looking for has been
      removed.
    </p>
    <StyledLink to="/">Go Back</StyledLink>
  </Wrapper>
);

export default NotFound;
