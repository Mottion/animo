import { useState, useEffect } from 'react';
import Carousel from 'react-elastic-carousel';
import axios from 'axios';
import breakPoints from '../../utils/breakPoints'

import { Container } from './styles';

import AnimeCard from './AnimeCard';


interface Anime {
  mal_id: number;
  title: string;
  image_url: string;
  type: string;
  score: number;
}

interface Props {
  getURL: string;
  getType: string;
}

function AnimesWrapper({getURL, getType}: Props) {
  const [animes, setAnimes] = useState<Anime[]>([]);


  useEffect(() => {
    axios.get(getURL).then(function(response){
      // colocar no ESTADO -> "animes" apenas 20 animes, nao colocar mangas ou outras coisas.
      var animesArray: Anime[] = [];
      for(var i = 0; animesArray.length < 20 ; i++){
        if(getType === "anime" && response.data.anime[i].type === "TV"){
          animesArray.push(response.data.anime[i]);
        }else if(getType === "top" && response.data.top[i].type === "TV" ){
          animesArray.push(response.data.top[i]);
        }
      }

      setAnimes(animesArray);
    })
    .catch(function (error: any) {
      console.log('ocorreu um erro -> ' + error);
    })
  }, [getURL, getType]);

  return (
    <Container>
      <Carousel
        itemsToShow={5} 
        pagination={false} 
        itemsToScroll={5}
        isRTL={false}
        breakPoints={breakPoints}
      >
        {animes.map(item => (
          <AnimeCard 
            key={item.mal_id}
            malID={item.mal_id}
            imageURL={item.image_url}
            title={item.title}
            score={item.score}
          />
        )
        )}
      </Carousel>
      <a href="/" className="moreButton">✚</a>
    </Container>
  );
};

export default AnimesWrapper;