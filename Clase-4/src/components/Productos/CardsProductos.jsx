import React from 'react';

import { products } from '../../data/Products'

import CardProducto from './CardProducto';
import Button from '../UI/Button/Button';

import { ProductosContainer, ButtonContainerStyled, ProductosWrapper } from './CardsProductosStyles';

const CardsProductos = () => {

  return (
    <ProductosWrapper>
        <h2>Nuestros Productos</h2>
        <ProductosContainer>
        {products.map((food) => {
            return <CardProducto key={food.id} {...food} />;
        })}
            
      </ProductosContainer>

        <ButtonContainerStyled>
          <Button>
            <span>Ver menos</span>
          </Button>
          <Button
            disabled
          >
            Ver más
          </Button>
        </ButtonContainerStyled>
    </ProductosWrapper>
  );
};

export default CardsProductos;