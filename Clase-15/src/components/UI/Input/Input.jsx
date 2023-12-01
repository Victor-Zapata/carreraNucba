import React from "react";
import {
  InputBoxStyled,
  InputLabelStyled,
  InputStyled,
  ErrorStyled,
} from "./InputStyles";

const Input = ({ name, label, type, isError, ...field }) => {
  return (
    <InputBoxStyled>
      <InputLabelStyled htmlFor={label}>{label}</InputLabelStyled>
      <InputStyled
      error={isError}
      name={name}
      type={type}
      id={label}
      {...field}
      />

      {isError && <ErrorStyled>{isError}</ErrorStyled>}
    </InputBoxStyled>
  );
};

export default Input;
