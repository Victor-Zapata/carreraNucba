import React from "react";
import {
  PHeredado,
  StyledButton,
  StyledContainer,
  StyledH4,
  StyledP,
} from "./EjemploStyledStyles";

const EjemploStyled = () => {
  return (
    <StyledContainer>
      <StyledH4>Este es un h4 con SC</StyledH4>
      <StyledP>Este es un P con SC</StyledP>
      <h3>Nesting</h3>
      <PHeredado>Soy un P heredado</PHeredado>
      <StyledButton width={'350px'}>Soy un botón</StyledButton>
      <StyledButton color width={'250px'}>Soy un botón con props</StyledButton>
    </StyledContainer>
  );
};

export default EjemploStyled;
