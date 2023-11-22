import React from 'react';

import Categoria from './Categoria';
import { CategoriasContainer } from './CategoriasStyles';
import { useSelector } from 'react-redux';

const Categorias = () => {
  const categories = useSelector(state => state.categories.categories);
  return (
    <CategoriasContainer>
        {
          categories.map(category => (
            <Categoria key={category.id} {...category} />
          ))
        }
    </CategoriasContainer>
  );
};

export default Categorias;
