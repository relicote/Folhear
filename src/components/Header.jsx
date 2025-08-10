import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.card};
  padding: 1rem 2rem;
  text-align: center;
  font-size: 1.8rem;
  font-weight: 800;
  letter-spacing: -1px;
  color: ${({ theme }) => theme.colors.accent};
  box-shadow: 0 2px 6px rgba(0,0,0,0.4);
`;

export default function Header() {
  return <HeaderContainer>📚 Folhear</HeaderContainer>;
}
