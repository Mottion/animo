import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Container, Wrapper,AnimeSearchContainer, SadIcon } from './styles';

type Anime = {
  mal_id: number;
  image_url: string;
  title: string;
  synopsis: string;
  score: number;
  episodes: number;
  start_date: string;
}

function SearchPage() {
  const { name }: {name: string} = useParams();
  const [searchList, setSearchList] = useState<Anime[]>([]);

  useEffect(() => {
    axios.get(`https://api.jikan.moe/v3/search/anime?q=${name}`).then(function(response){
      setSearchList(response.data.results);
    })
    .catch(function (error: any) {
      console.log('ocorreu um erro -> ' + error);
    });
  }, [name]);

  return (
    <Container>
      <p>Resultados da Pesquisa por <span>{name}</span> </p>
      <Wrapper>
        {searchList.length === 0 ? (
          <>
            <SadIcon />
            <h4>Nenhum anime foi encontrado com o nome digitado</h4>
          </>
        ): 
          searchList.map(anime => (
            <AnimeSearchCard anime={anime as Anime} />
          ))
        }
      </Wrapper>
    </Container>
  );
};

export default SearchPage;

function AnimeSearchCard({anime}: {anime: Anime}) {
  
  return (
    <AnimeSearchContainer to={`/anime/${anime.mal_id}`}>
      <img src={anime.image_url} alt='imagem do anime' />
      <div>
        <p>Nome: <span>{anime.title}</span></p>
        <p>Score: <span>{anime.score}</span></p>
        <p>Episodios: <span>{anime.episodes}</span></p>
        <p>lançamento: <span>{anime.start_date?.slice(0, 10)}</span></p>
        <div className="synopsis">{anime.synopsis}</div>
      </div>
    </AnimeSearchContainer>
  )
}