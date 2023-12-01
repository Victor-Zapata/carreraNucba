import React from "react";
import { InputBoxStyled, InputLabelStyled } from "../Input/InputStyles";
import { TextArea, ErrorStyled } from "./TextAreaInputStyles";

const TextAreaInput = ({ name, label, isError, ...field  }) => {
  return (
    <InputBoxStyled>
      <InputLabelStyled htmlFor={label}>{label}</InputLabelStyled>
      <TextArea 
       error={isError}
       name={name}
       id={label}
       {...field}
      />
      {isError && <ErrorStyled>{isError}</ErrorStyled>}
    </InputBoxStyled>
  );
};

export default TextAreaInput;
