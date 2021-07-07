import { Container } from './styles';
import AnimesWrapper from '../../components/AnimesWrapper';


function HomePage() {

  return (
    <Container>

      <h2>Animes da Temporada</h2>
      <AnimesWrapper  getURL='https://api.jikan.moe/v3/season' getType="anime"/>
      
      <h2>Top Animes</h2>
      <AnimesWrapper  getURL='https://api.jikan.moe/v3/top/anime/1' getType="top"/>

      <h2>Animes Anunciados</h2>
      <AnimesWrapper  getURL='https://api.jikan.moe/v3/season/later' getType="anime"/>

      <h2>Animes de ação</h2>
      <AnimesWrapper  getURL='https://api.jikan.moe/v3/genre/anime/1' getType="anime"/>

      <h2>animes de romance</h2>
      <AnimesWrapper  getURL='https://api.jikan.moe/v3/genre/anime/22' getType="anime"/>
      
    </Container>
  );
};

export default HomePage;
