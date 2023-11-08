
import { motion } from 'framer-motion';


import { FaUserAlt } from 'react-icons/fa';
import { HiHome } from 'react-icons/hi';
import {AiOutlineMenu} from 'react-icons/ai';


import {
  LinkContainerStyled,
  LinksContainerStyled,
  NavbarContainerStyled,
  UserNavStyled,
  UserContainerStyled,
  SpanStyled,
  MenuContainerStyled,
  HomeContainerStyled
} from './NavbarStyles';

function Navbar() {

  return (
    <NavbarContainerStyled>
      <div>
        <a href='/#'>
          <img
            src='https://res.cloudinary.com/dcatzxqqf/image/upload/v1658797659/coding/NucbaZappi/Assets/nucba-zappi-icon_oe3ark_xmvab5.png'
            alt='Logo'
          />
        </a>
      </div>
      <LinksContainerStyled>
        <HomeContainerStyled>
          <motion.div whileTap={{ scale: 0.97 }}>
            <a href='/#'>
              <LinkContainerStyled home>
                <HiHome />
              </LinkContainerStyled>
              Home
            </a>
          </motion.div>
        </HomeContainerStyled>

        <UserNavStyled>
          <UserContainerStyled>
            <SpanStyled>
              Inicia sesión
            </SpanStyled>
            <FaUserAlt />        
          </UserContainerStyled>
        </UserNavStyled>
        <motion.div whileTap={{ scale: 0.97 }}>
          <MenuContainerStyled>
              <AiOutlineMenu/>
          </MenuContainerStyled>
        </motion.div>
      </LinksContainerStyled>
    </NavbarContainerStyled>
  );
}

export default Navbar;