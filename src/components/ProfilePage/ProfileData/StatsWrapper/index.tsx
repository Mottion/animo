import { Container } from './styles';

interface StatsWrapperProps {
  title: string;
  content: number;
}

function StatsWrapper({ title, content }: StatsWrapperProps) {
  return (
    <Container>
      <h5>{title}</h5>
      <span>{content}</span>
    </Container>
  );
};

export default StatsWrapper;
