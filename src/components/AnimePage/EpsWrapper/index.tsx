import { useState, useEffect } from 'react';
import Carousel from 'react-elastic-carousel';
import axios from 'axios';

import { Container, Episode, Video, PlayIcon } from './styles';

interface Props {
  id: string;
}

interface Episodes {
  title: string;
  episode: string;
  image_url: string;
}

function EpsWrapper({id}: Props) {
  const [episodes, setEpisodes] = useState<Episodes[]>([]);
  const breakPoints = [
    // +40
    {width: 10, itemsToShow: 1, itemsToScroll: 1},
    {width: 470, itemsToShow: 2, itemsToScroll: 2},
    {width: 690, itemsToShow: 3, itemsToScroll: 3},
    {width: 940, itemsToShow: 4, itemsToScroll: 4},
    {width: 1190, itemsToShow: 5, itemsToScroll: 5},
  ]

  useEffect(() => {
    // pegar eps do anime
    axios.get(`https://api.jikan.moe/v3/anime/${id}/videos`).then(function(response){
      setEpisodes(response.data.episodes.reverse());
    })
    .catch(function (error: any) {
      console.log('ocorreu um erro -> ' + error);
    });
  }, [id]);

  return (
    <Container>
      <Carousel
        itemsToShow={5} 
        pagination={true} 
        itemsToScroll={5}
        isRTL={false}
        breakPoints={breakPoints}
      >
        {episodes.map(episode => (
          <Episode>
            <Video>
              <img src={episode?.image_url} alt="imagem do episodio" />
              <span>{episode?.episode}</span>
              <PlayIcon />
            </Video>
            <h4>{episode?.title}</h4>
          </Episode>
        ))}
      </Carousel>
    </Container>
  );
};

export default EpsWrapper;
