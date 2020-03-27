import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Sort from "../Sort";

const ShelfHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;

  @media (max-width: 776px) {
    flex-direction: column;
  }
`;

const FilterTitle = styled.h1`
  @media (max-width: 776px) {
    padding-bottom: 16px;
  }
`;

const ShelfHeader = props => {
  const displayFilters = () => {
    // if (props.filters.length > 0) {
    //   if (props.filters.length == 1) {
    //     str = `${props.filters[0]}`;
    //   } else {
    //     props.filters.map(filter => {
    //       str += `${filter.charAt(0).toUpperCase() + filter.slice(1)}, `;
    //     });
    //   }
    // } else {
    //   str = "All";
    // }
    // return str;
  };

  return (
    <ShelfHeaderWrapper>
      <FilterTitle>
        Showing {props.filters.length < 1 ? `All` : ""} Posters (
        {props.productsLength})
      </FilterTitle>

      <Sort />
    </ShelfHeaderWrapper>
  );
};

ShelfHeader.propTypes = {
  productsLength: PropTypes.number.isRequired
};

export default ShelfHeader;
