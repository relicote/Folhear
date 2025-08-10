import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.card};
  font-weight: 600;
`;

export default function Navigation() {
  return (
    <Nav>
      <Link to="/">🏠 Início</Link>
      <Link to="/search">🔍 Buscar</Link>
      <Link to="/profile">👤 Perfil</Link>
    </Nav>
  );
}
