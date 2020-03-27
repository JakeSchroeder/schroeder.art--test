import React, { useState } from "react";

import { StyledInput } from "../components/utils/FormElements";

const useInput = ({ type }) => {
  const [value, setValue] = useState("");
  const input = (
    <StyledInput
      value={value}
      onChange={e => {
        setValue(e.target.value);
      }}
      type={type}
    />
  );
  return [value, input];
};

export default useInput;
