import React from 'react';
import { StyledButton } from './ButtonStyles';

const Button = ({
  children,
  radius = '32',
  secondary,
  disabled = false,
}) => {
  return (
    <StyledButton
      disabled={disabled}
      secondary={secondary}
      radius={radius}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </StyledButton>
  );
};

export default Button;