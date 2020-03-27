import React from "react";
import styled from "styled-components";

import Colors from "../utils/Colors";
import hero_src from "../../img/hero.png";
import hero_sm_src from "../../img/hero-sm.png";

const HeroWrapper = styled.div`
  padding: 0 16px;
  padding-bottom: 64px;
`;

const HeroWrapperInner = styled.div`
  width: 100%;
  min-height: 500px;
  background: ${Colors.White};
  border: 18px solid #343535;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${hero_src});
  @media (max-width: 1028px) {
    background-image: url(${hero_sm_src});
  }

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const HeroDescription = styled.h1`
  text-align: center;
  margin-bottom: 8px;
`;

const CTAButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  width: 200px;
  height: 70px;
  border: 1px solid ${Colors.Border};
  background: ${Colors.Primary};
  /* padding: 16px; */
  color: ${Colors.White};
  text-decoration: none;
  font-family: germania-one, sans-serif;
`;

const HeroSubText = styled.p`
  font-size: 1.6rem;
  margin-bottom: 16px;
`;

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroWrapperInner>
        <HeroDescription>
          Furnish an entire room for only $250
          <br />
          Plus, Get Free Two-Day Delivery
        </HeroDescription>
        <HeroSubText>With Code: 20110</HeroSubText>
        <CTAButton>See Rooms</CTAButton>
      </HeroWrapperInner>
    </HeroWrapper>
  );
};

export default Hero;
