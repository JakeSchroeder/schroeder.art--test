import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";
import { updateFilters } from "../../../../services/filters/actions";
import Colors from "../../../utils/Colors";

import FilterItem from "./FilterItem";

const FiltersInner = styled.div`
  width: 30%;
  padding-right: 16px;
  padding-left: 16px;

  @media (max-width: 776px) {
    width: 100%;
  }
`;

const FiltersList = styled.ul`
  text-align: left;
  display: flex;
  flex-direction: column;

  @media (max-width: 776px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

// const availableFilters = ['all', 'bedroom', 'bathroom', 'den', 'kitchen'];

const listFromProducts = [
  "bedroom",
  "bathroom",
  "den",
  "kitchen",
  "showroom",
  "study",
  "utility"
];

const Filter = props => {
  //   let setFromProducts = new Set();
  //   let listFromProducts = [];
  //   props.products.map(product => {
  //     product.collection.map(item => {
  //       setFromProducts.add(item);
  //     });
  //   });

  //   listFromProducts = [...setFromProducts].sort();

  // useEffect(() => {

  // }, []);

  let filters = new Set();

  const toggleFilter = label => {
    if (filters.has(label)) {
      filters.delete(label);
    } else {
      filters.add(label);
    }

    props.updateFilters(Array.from(filters));
  };

  const createFilters = () => {
    return listFromProducts.map(label => (
      <FilterItem handleFilterChange={toggleFilter} key={label} label={label} />
    ));
  };

  return (
    <FiltersInner>
      <FiltersList>{createFilters()}</FiltersList>
    </FiltersInner>
  );
};

Filter.propTypes = {
  updateFilters: PropTypes.func.isRequired,
  // products: PropTypes.array,
  filters: PropTypes.array
};

// const mapStateToProps = state => ({
//   products: state.shelf.products
// });

export default connect(null, { updateFilters })(Filter);
