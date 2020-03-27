import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding-bottom: 32px;
`;

const SectionTitle = styled.h1`
  margin-bottom: 32px;
`;

const About = () => (
  <>
    <Section>
      <SectionTitle>Our Mission</SectionTitle>
      <p>
        Schroeder's Art is dedicated to bringing customers the best selection of
        posters and art prints in the world. Our range of hundreds of thousands
        of posters and art prints, combined with our framing and mounting
        services and 100% satisfaction guarantee, make it simple and safe for
        customers to find a selection that is perfect for their home, apartment,
        or office.{" "}
      </p>
    </Section>

    <Section>
      <SectionTitle>Our Products & Services</SectionTitle>
      <p>
        Our selection of posters and prints includes entertainment and specialty
        posters, decorative prints, and art reproductions. Whether you are
        looking for a vintage exclusive, a print from war time ad campaigns, or
        a poster that reflects a specific era, you will find it at Schroeder's
        Art. Schroeder's Art value-added services, including framing and
        mounting, provide customers with the option to enhance the appearance of
        their poster or art print. Our framing service allows customers to
        choose from a variety of high-quality frames, mats, and glass. Our
        unique mounting service permanently bonds prints to a durable hardboard
        backing. Both services produce high-quality, attractive finished
        products at a reasonable price.
      </p>
    </Section>
    <Section>
      <SectionTitle>Our History</SectionTitle>
      <p>
        Schroeder's Art was founded in 2018 in Chicago, Illinois. Since that
        time, Schroeder's Art has helped customers worldwide decorate their
        homes, dorm rooms, apartments, and offices.
      </p>
    </Section>
  </>
);

export default About;
