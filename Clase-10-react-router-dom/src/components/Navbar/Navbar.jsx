import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import AuthContext from '../../context/AuthContext';

const NavbarContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;
  max-width: 1200px;
  padding: 20px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  & img {
    width: 30px;
  }
`;

const LinkContainer = styled.ul`
  display: flex;
  gap: 20px;
`;

const NavLinkStyled = styled(NavLink)`
  color: white;
`;

const Navbar = () => {
  const navigate = useNavigate();

  // Context
  const { isAuth, user } = useContext(AuthContext);
  return (
    <NavbarContainer>
      <Logo onClick={() => navigate('/')}>
        <img
          src='https://renderer-v2.vercel.app/_next/image?url=https%3A%2F%2Fapi.typedream.com%2Fv0%2Fdocument%2Fpublic%2Fac4f6f0d-8160-4e58-9d18-cb5e7c880fb6_Recurso_32_png.png&w=384&q=75'
          alt=''
        />
      </Logo>

      <LinkContainer>
        <NavLinkStyled to='/'>Home</NavLinkStyled>
        <NavLinkStyled to='/products'>Products</NavLinkStyled>
        {/* <NavLinkStyled to='/login'>Login</NavLinkStyled> */}

        <NavLinkStyled to={isAuth ? `/usuario/${user}` : 'login'}>
          {isAuth ? 'Perfil' : 'Login'}
        </NavLinkStyled>
      </LinkContainer>
    </NavbarContainer>
  );
};

export default Navbar;
