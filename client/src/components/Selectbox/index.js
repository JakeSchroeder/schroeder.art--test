import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Colors from "../utils/Colors";
import arrow_src from "../../img/down-arrow.svg";

const SelectBoxWrapper = styled.select`
  -webkit-appearance: none;
  -webkit-border-radius: 0px;
  padding: 0 22px 0 16px;
  border-radius: 0;
  font-size: 1.8rem;
  margin-left: 16px;
  height: 32px;
  display: block;
  background: ${Colors.White};
  font-family: germania-one, sans-serif;
  border: 1px solid ${Colors.Border};
  cursor: pointer;
  outline: none;
  background-image: url(${arrow_src});
  background-repeat: no-repeat;
  background-size: 8%;
  background-position: 96% 55%;
`;

const OptionWrapper = styled.option`
  font-size: 1.8rem;
`;

const Selectbox = ({ options, classes, handleOnChange }) => {
  const createOptions = options => {
    // options.map(o => {
    //   return (
    //     <OptionWrapper value={o.value} key={o.value}>
    //       {o.label}
    //     </OptionWrapper>
    //   );
    // });

    let optionList = options.map(o => (
      <OptionWrapper value={o.value} key={o.value}>
        {o.label}
      </OptionWrapper>
    ));

    return optionList;
  };

  return (
    <SelectBoxWrapper
      onChange={e => handleOnChange(e.target.value)}
      className={classes}
    >
      {createOptions(options)}
    </SelectBoxWrapper>
  );
};

Selectbox.propTypes = {
  options: PropTypes.array.isRequired,
  classes: PropTypes.string,
  handleOnChange: PropTypes.func.isRequired
};

export default Selectbox;
