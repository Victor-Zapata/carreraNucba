import React from 'react';

import Button from '../UI/Button/Button';

import {
  CardPrice,
  ContainerPrice,
  ProductosCard,
} from './CardsProductosStyles';

const CardProducto = ({ img, title, desc, price }) => {

  return (
    <ProductosCard>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <p>{desc}</p>
      <ContainerPrice>
        <CardPrice>${price}</CardPrice>
        <Button

        >
          Agregar
        </Button>
      </ContainerPrice>
    </ProductosCard>
  );
};

export default CardProducto;