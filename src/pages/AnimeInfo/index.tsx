import {useParams} from "react-router-dom";
import {useEffect} from 'react';
import AnimeDetails from "../../components/AnimePage/AnimeDetails";
import EpsWrapper from "../../components/AnimePage/EpsWrapper";
import RecomendedAnimes from "../../components/AnimePage/RecomendedAnimes";

import { 
  Container,  
} from './styles';

interface Params {
  id: string;
}




// interface Recommendations {
//   mal_id: number;
//   image_url: string;
//   title: string;
// }


function AnimeInfo() {
  const {id}: Params  = useParams();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id]);

  return (
    <Container>
      <AnimeDetails id={id} />

      <EpsWrapper id={id} />
      <RecomendedAnimes id={id} />
    </Container>
  );
};

export default AnimeInfo;
