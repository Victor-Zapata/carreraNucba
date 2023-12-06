import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cart/cartSlice';
import { formatPrice } from '../../utils/index';

import Button from '../UI/Button/Button';

import {
  Card,
  CardImg,
  CardPrice,
  CardText,
  CardTitle,
  InfoCard,
} from './CardsRecomendacionStyled';

const CardRecomendacion = ({ title, img, price, desc, id }) => {
  const dispatch = useDispatch();

  return (
    <Card>
      <CardImg src={img} alt={title} />
      <CardText>
        <CardTitle>{title}</CardTitle>
        <InfoCard>{desc}</InfoCard>
        <CardPrice>{formatPrice(price)}</CardPrice>
      </CardText>
      <Button
        onClick={() =>
          dispatch(addToCart({ img, title, desc, price, id }))
        }
      >
        Agregar
      </Button>
    </Card>
  );
};

export default CardRecomendacion;
