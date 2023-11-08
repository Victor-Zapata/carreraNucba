import React from 'react';
import {categories} from '../../data/Categories';
import Categoria from './Categoria';
import { CategoriasContainer, CategoriasWrapper } from './CategoriasStyles';

const Categorias = () => {
  return (
    <CategoriasWrapper>
      <h2>Categorias</h2>
    <CategoriasContainer>
      {categories.map(category => (
        <Categoria key={category.id} {...category} />
      ))}
    </CategoriasContainer>
    </CategoriasWrapper>
  );
};

export default Categorias;