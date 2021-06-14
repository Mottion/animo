import { Container } from './styles';
import AnimesWrapper from '../../components/AnimesWrapper';


function Home() {

  return (
    <Container>

      <h2>Animes da Temporada</h2>
      <AnimesWrapper  getURL='https://api.jikan.moe/v3/season' getType="anime" path={true}/>
      
      <h2>Top Animes</h2>
      <AnimesWrapper  getURL='https://api.jikan.moe/v3/top/anime/1' getType="top" path={true}/>

      <h2>Animes Anunciados</h2>
      <AnimesWrapper  getURL='https://api.jikan.moe/v3/season/later' getType="anime" path={true}/>

      <h2>Animes de ação</h2>
      <AnimesWrapper  getURL='https://api.jikan.moe/v3/genre/anime/1' getType="anime" path={true}/>

      <h2>animes de romance</h2>
      <AnimesWrapper  getURL='https://api.jikan.moe/v3/genre/anime/22' getType="anime" path={true}/>
      
    </Container>
  );
};

export default Home;
