import {useParams} from "react-router-dom";
import AnimeDetails from "../../components/AnimePage/AnimeDetails";
import EpsWrapper from "../../components/AnimePage/EpsWrapper";

import { 
  Container, 
  RecomendedAnimes 
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
  // const [recommendations, setRecommendations] = useState<Recommendations[]>([])



  return (
    <Container>
      <AnimeDetails id={id} />

        <EpsWrapper id={id} />
        <RecomendedAnimes></RecomendedAnimes>
    </Container>
  );
};

export default AnimeInfo;