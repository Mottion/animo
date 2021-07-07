import { Link } from 'react-router-dom';
import { useEffect,useState } from 'react';
import axios from 'axios';

import AnimeCard from '../AnimeCard';

import { Container, AnimesContainer } from './styles';

interface Props {
  type: string;
}

type Animes = {
  mal_id: number;
  title: string;
  image_url: string;
  score: number;
}

function UserAnimes({type}: Props) {
  const [animes, setAnimes] = useState<Animes[]>([])
  const typesArray = [
    {string: 'todos', url: 'all'},
    {string: 'assistindo', url: 'watching'},
    {string: 'completados', url: 'completed'},
    {string: 'em espera', url: 'onhold'},
    {string: 'desistido', url: 'dropped'},
    {string: 'planejando ver', url: 'plantowatch'},
  ];

  useEffect(() => {
    axios.get(`https://api.jikan.moe/v3/user/AdrianElizandro/animelist/${type}`).then(function(response){
      setAnimes(response.data.anime);
    })
    .catch(function (error: any) {
      console.log('ocorreu um erro -> ' + error);
    });
  }, [type])

  return (
    <Container>
      <div className="buttons">
        {typesArray.map(link => (
          <Link to={`${link.url}`} className={link.url === type ? 'active' : ''}>{link.string}</Link>
        ))}
      </div>
      <AnimesContainer>
        {animes.map(anime => (
          <AnimeCard
          imageURL={anime.image_url}
          title={anime.title}
          mal_id={anime.mal_id}
          score={anime.score}
          />
        ))}
      </AnimesContainer>
      
    </Container>
  );
};

export default UserAnimes;
