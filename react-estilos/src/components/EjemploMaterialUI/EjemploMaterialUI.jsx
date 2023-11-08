import React from "react";
import Button from "@mui/material/Button";

const EjemploMaterialUI = () => {
  return (
    <>
      <Button>Botonito</Button>
      <Button variant="contained">Botonito</Button>
      <Button variant="outlined">Botonito</Button>
      <Button variant="contained" disabled>Botonito</Button>
      <Button variant="contained" href="#contained-buttons">Botonito</Button>
      <Button variant="contained" color="success">Botonito</Button>
      <Button variant="outlined" color="error">Botonito</Button>
    </>
  );
};

export default EjemploMaterialUI;
