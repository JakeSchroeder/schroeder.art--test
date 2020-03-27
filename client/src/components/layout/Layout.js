import React from "react";
import styled from "styled-components";

import Colors from "../utils/Colors";
import Header from "./Header";
import Footer from "./Footer";

const Wrapper = styled.main`
  padding-top: 100px;
  height: 100%;
  width: 100%;
  /* display: flex;
  flex-direction: column; */
`;

const ContentWrapper = styled.div`
  min-height: 100%;
  width: 100%;
  background-color: ${Colors.White};
  background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23b72a2a' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
  /* display: flex;
  flex-direction: column; */
`;

const Content = styled.div`
  padding: 64px;
  height: 100%;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  /* overflow: auto; */
`;

const Layout = ({ children }) => (
  <Wrapper>
    <Header />

    <ContentWrapper>
      <Content>{children}</Content>
    </ContentWrapper>
    <Footer />
  </Wrapper>
);

export default Layout;
