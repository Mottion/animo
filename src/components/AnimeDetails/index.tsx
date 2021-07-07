import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, AnimeImage, AnimeInfos, GenresWrapper, Synopsis } from './styles';

interface Props {
  id: string;
}

interface Anime {
  mal_id: number;
  url: string;
  image_url: string;
  title: string;
  episodes: number;
  score: number;
  synopsis: string;
  genres: Array<Genres>;
  aired: {
    prop: {
      from: {
        day: number;
        month: number;
        year: number;
      }
    }
  }
}

interface Genres {
  mal_id: number;
  name: string;
}


function AnimeDetails({id}: Props) {
  const [anime, setAnime] = useState({} as Anime)

  useEffect(() => {
    // pegar infos do anime
    axios.get(`https://api.jikan.moe/v3/anime/${id}`).then(function(response){
      setAnime(response.data);
    })
    .catch(function (error: any) {
      console.log('ocorreu um erro -> ' + error);
    });
  }, [id]);


  return (
    <Container>
      <AnimeImage src={anime.image_url} alt="imagem do anime" />
      <AnimeInfos>
        <p className="title">{anime.title}</p>
        <p>Score: <span>{anime.score}</span></p>
        <p>episodios: <span>{anime.episodes}</span></p>
        <p>lançamento: <span>{anime?.aired?.prop?.from?.day} do {anime?.aired?.prop?.from?.month} de {anime?.aired?.prop?.from?.year}</span></p>
        <GenresWrapper>
        {anime?.genres?.map(item => {
          return <Link key={item.mal_id} to="/">{item.name}</Link>;
        })}
        </GenresWrapper>
        <Synopsis>
          {anime.synopsis}
        </Synopsis>
      </AnimeInfos>
    </Container>
  );
};

export default AnimeDetails;
