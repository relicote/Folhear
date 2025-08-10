// src/pages/Home.jsx
import styled from "styled-components";

const Container = styled.div`
  background-color: #14181c;
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  font-family: 'Inter', sans-serif;
  color: #d8d8d8;
`;

const Section = styled.section`
  width: 100%;
  max-width: 1200px;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 1.25rem;

  span {
    background: linear-gradient(90deg, #00ff80, #ff8000);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
`;

const Card = styled.div`
  background-color: #1c1f24;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.18s ease, box-shadow 0.18s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.6);
  }
`;

const BookCover = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
  display: block;
  background: linear-gradient(180deg,#222,#111);
`;

const BookTitle = styled.p`
  padding: 0.6rem;
  font-size: 0.9rem;
  text-align: center;
  color: #e8e8e8;
  min-height: 40px;
`;

const NewsCard = styled.div`
  background-color: #1c1f24;
  padding: 1rem;
  border-radius: 8px;
  transition: background 0.2s;
  min-height: 100px;

  &:hover { background-color: #22272d; }
`;

const NewsTitle = styled.h3`
  font-size: 1.05rem;
  color: #ffffff;
  margin-bottom: 0.5rem;
`;

const NewsText = styled.p`
  font-size: 0.9rem;
  color: #b0b0b0;
`;

export default function Home() {
  const novos = [
    { title: "1984", cover: "https://covers.openlibrary.org/b/isbn/8535914846-L.jpg" }, 
    { title: "O Senhor dos Anéis", cover: "https://covers.openlibrary.org/b/isbn/9788595084759-L.jpg" }, 
    { title: "Dom Casmurro", cover: "https://covers.openlibrary.org/b/isbn/1324090707-L.jpg" },
    { title: "Harry Potter e a Pedra Filosofal", cover: "https://covers.openlibrary.org/b/isbn/8532511015-L.jpg" }, 
    { title: "Orgulho e Preconceito", cover: "https://covers.openlibrary.org/b/isbn/8563560158-L.jpg" }, 
    { title: "O Hobbit", cover: "https://covers.openlibrary.org/b/isbn/054792822X-L.jpg" }, 
  ];

  const populares = [
    { title: "A Menina que Roubava Livros", cover: "https://covers.openlibrary.org/b/isbn/8598078174-L.jpg" },
    { title: "O Código Da Vinci", cover: "https://covers.openlibrary.org/b/isbn/8599296124-L.jpg" },
    { title: "A Guerra dos Tronos", cover: "https://covers.openlibrary.org/b/isbn/0553103547-L.jpg" }, 
    { title: "O Pequeno Príncipe", cover: "https://covers.openlibrary.org/b/isbn/0156012197-L.jpg" },
    { title: "Cem Anos de Solidão", cover: "https://covers.openlibrary.org/b/isbn/9780060883287-L.jpg" }, 
    { title: "It: A Coisa", cover: "https://covers.openlibrary.org/b/isbn/978-8560280940-L.jpg" }, 
  ];

  const noticias = [
    {
      title: "Novo romance de autor brasileiro entra para lista internacional",
      text: "O mais recente livro de João Silva foi indicado ao prêmio Booker Prize, colocando a literatura nacional em destaque."
    },
    {
      title: "Adaptação de 'O Hobbit' ganha nova edição ilustrada",
      text: "Uma versão de colecionador com ilustrações inéditas foi lançada no Brasil este mês."
    },
    {
      title: "Bienal do Livro de SP confirma grandes nomes",
      text: "A Bienal contará com autores renomados e lançamentos exclusivos em agosto."
    }
  ];

  return (
    <Container>
      {/* Novos no Folhear */}
      <Section>
        <SectionTitle>Novos no <span>Folhear</span></SectionTitle>
        <Grid>
          {novos.map((book, index) => (
            <Card key={index}>
              <BookCover src={book.cover} alt={book.title} onError={(e)=>{ e.currentTarget.src = '/placeholder-book.png'; }} />
              <BookTitle>{book.title}</BookTitle>
            </Card>
          ))}
        </Grid>
      </Section>

      {/* Populares no Folhear */}
      <Section>
        <SectionTitle>Populares no <span>Folhear</span></SectionTitle>
        <Grid>
          {populares.map((book, index) => (
            <Card key={index}>
              <BookCover src={book.cover} alt={book.title} onError={(e)=>{ e.currentTarget.src = '/placeholder-book.png'; }} />
              <BookTitle>{book.title}</BookTitle>
            </Card>
          ))}
        </Grid>
      </Section>

      {/* Notícias sobre livros */}
      <Section>
        <SectionTitle>Notícias sobre <span>Livros</span></SectionTitle>
        <Grid>
          {noticias.map((news, index) => (
            <NewsCard key={index}>
              <NewsTitle>{news.title}</NewsTitle>
              <NewsText>{news.text}</NewsText>
            </NewsCard>
          ))}
        </Grid>
      </Section>
    </Container>
  );
}
