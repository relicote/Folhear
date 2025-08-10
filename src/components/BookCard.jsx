import styled from 'styled-components';

const Card = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border-radius: 8px;
  overflow: hidden;
  width: 160px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 12px rgba(0,0,0,0.4);
  }
`;

const Cover = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
`;

const Info = styled.div`
  padding: 0.8rem;
`;

const Title = styled.h3`
  font-size: 0.95rem;
  margin-bottom: 0.3rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

const Author = styled.p`
  font-size: 0.8rem;
  color: #aaa;
`;

export default function BookCard({ title, cover, author }) {
  return (
    <Card>
      <Cover src={cover} alt={title} />
      <Info>
        <Title>{title}</Title>
        <Author>{author}</Author>
      </Info>
    </Card>
  );
}
