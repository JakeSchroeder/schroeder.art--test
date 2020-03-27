import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";
import { updateSort } from "../../../../services/sort/actions";
import Selectbox from "../../../Selectbox";

const SortBy = styled.p`
  font-family: germania-one, sans-serif;
  display: flex;
  align-items: center;
`;

const sortBy = [
  { value: "", label: "Select" },
  { value: "lowestprice", label: "Lowest to highest" },
  { value: "highestprice", label: "Highest to lowest" }
];

const Sort = ({ updateSort, sort }) => (
  <SortBy>
    Order by
    <Selectbox
      options={sortBy}
      handleOnChange={value => {
        console.log(value);
        updateSort(value);
      }}
    />
  </SortBy>
);

Sort.propTypes = {
  updateSort: PropTypes.func.isRequired,
  sort: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  sort: state.sort.type
});

export default connect(mapStateToProps, { updateSort })(Sort);
