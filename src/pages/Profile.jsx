import styled from 'styled-components';

const Container = styled.div`
  padding: 1rem;
`;

export default function Profile() {
  return (
    <Container>
      <h2>Meu Perfil</h2>
      <p>Lista de livros lidos, avaliações e favoritos.</p>
    </Container>
  );
}
