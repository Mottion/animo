import Carousel from 'react-elastic-carousel';
import breakPoints from '../../../utils/breakPoints'
import { useState, useEffect } from 'react';
import axios from 'axios';
import AnimeCard from '../../AnimesWrapper/AnimeCard'

import { Container } from './styles';

interface Props {
  id: string;
}

interface Recommentadions {
  title: string;
  mal_id: number;
  image_url: string;
}

function RecomendedAnimes({id}: Props) {
  const [recommentadions, setRecommentadions] = useState<Recommentadions[]>([]);


  useEffect(() => {
    // pegar eps do anime
    axios.get(`https://api.jikan.moe/v3/anime/${id}/recommendations`).then(function(response){
      setRecommentadions(response.data.recommendations);      
    })
    .catch(function (error: any) {
      console.log('ocorreu um erro -> ' + error);
    });
  }, [id]);
  console.log(recommentadions);

  return (
    <Container>
      <div />
      <Carousel
        itemsToShow={5} 
        pagination={false} 
        itemsToScroll={5}
        isRTL={false}
        breakPoints={breakPoints}
      >
        {recommentadions?.map(item => (
          <AnimeCard 
            key={item?.mal_id}
            malID={item?.mal_id}
            imageURL={item?.image_url}
            title={item?.title}
          />
        )
        )}
      </Carousel>
    </Container>
  );
};

export default RecomendedAnimes;
