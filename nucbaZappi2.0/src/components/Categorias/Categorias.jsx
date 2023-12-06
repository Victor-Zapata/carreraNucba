import React from 'react';
import { useSelector } from 'react-redux';

import Categoria from './Categoria';
import { CategoriasContainer } from './CategoriasStyles';

const Categorias = () => {
  const categories = useSelector(state => state.categories.categories);

  return (
    <CategoriasContainer>
      {categories.map(category => (
        <Categoria key={category.id} {...category} />
      ))}
    </CategoriasContainer>
  );
};

export default Categorias;
