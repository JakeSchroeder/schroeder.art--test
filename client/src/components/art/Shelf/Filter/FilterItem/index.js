import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Colors from "../../../../utils/Colors";

const FilterItemWrapper = styled.li`
  
  list-style: none;
  /* border: 9px solid ${Colors.Gray}; */
  
  
  width: 100%;
  margin-bottom: 16px;



`;

const FilterItemLabel = styled.label`
  display: block;
  cursor: pointer;
  font-size: 3.2rem;
  padding: 16px;
  width: 100%;
  border: 1px solid transparent;
  background: ${Colors.White};
  outline: none;
  font-family: germania-one, sans-serif;

  &:hover {
    border: 1px solid ${Colors.Border};
  }

  &.active {
    border: 1px solid ${Colors.Border};
    background: ${Colors.Primary};
  }
`;

const FilterItemInput = styled.input`
  position: absolute;
  opacity: 0;
`;

const FilterItem = props => {
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    console.log(isSelected);
  }, [isSelected]);

  const toggleFilter = () => {
    setIsSelected(isSelected => !isSelected);

    props.handleFilterChange(props.label);
  };

  return (
    <FilterItemWrapper>
      <FilterItemLabel className={isSelected ? "active" : ""}>
        <FilterItemInput
          type="checkbox"
          value={props.label}
          onChange={toggleFilter}
          checked={isSelected}
        />

        <span>
          {props.label.charAt(0).toUpperCase() + props.label.slice(1)}
        </span>
      </FilterItemLabel>
    </FilterItemWrapper>
  );
};

FilterItem.propTypes = {
  label: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired
};

export default FilterItem;
