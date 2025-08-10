import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.card};
`;

const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 800;
  letter-spacing: -1px;
  background: linear-gradient(90deg, #00ff80, #ff8000);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;

  a {
    color: #fff;
    font-weight: 600;
    text-decoration: none;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Title>Folhear</Title>
      <Nav>
        <Link to="/">🏠 Início</Link>
        <Link to="/search">🔍 Buscar</Link>
        <Link to="/profile">👤 Perfil</Link>
      </Nav>
    </HeaderContainer>
  );
}
