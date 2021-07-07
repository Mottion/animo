import {useParams} from "react-router-dom";
import {useEffect} from 'react';
import AnimeDetails from "../../components/AnimeDetails";
import EpsWrapper from "../../components/EpsWrapper";
import RecomendedAnimes from "../../components/RecomendedAnimes";

import { 
  Container,  
} from './styles';

interface Params {
  id: string;
}


function AnimePage() {
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

export default AnimePage;
