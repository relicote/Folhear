import styled from 'styled-components';

const Container = styled.div`
  padding: 1rem;
`;

export default function Search() {
  return (
    <Container>
      <h2>Buscar Livros</h2>
      <input type="text" placeholder="Digite o nome do livro..." />
    </Container>
  );
}
