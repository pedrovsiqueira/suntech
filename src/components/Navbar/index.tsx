import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Content, Navigation } from './styles';
// import bwlogo from '../../assets/bwlogo.svg';

const Nav: React.FC = () => {
  const activeStyle = {
    borderBottom: '2px solid #2A2A2A',
    fontWeight: 600,
  };

  return (
    <Container>
      <Content>
        <Navigation>
          <NavLink exact to="/" activeStyle={activeStyle}>
            mapa
          </NavLink>
          <NavLink to="/cadastrar" activeStyle={activeStyle}>
            adicionar residência
          </NavLink>
        </Navigation>
      </Content>
    </Container>
  );
};

export default Nav;
