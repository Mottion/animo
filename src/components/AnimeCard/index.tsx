import { Container, ScoreWrapper, StarIcon, TittleWrapper } from './styles';

interface Props {
  imageURL: string;
  title: string;
  mal_id: number;
  score?: number;
}

function AnimeCard({ imageURL, title, mal_id, score}: Props) {

  return (
    <Container style={{backgroundImage: "url(" + imageURL + ")"}} to={`/anime/${mal_id}`} >
      {score &&
        <ScoreWrapper>
          <StarIcon /> 
          <span>{score}</span>
        </ScoreWrapper>
      }
      <TittleWrapper>
        {title}
      </TittleWrapper>
    </Container>
  );
};

export default AnimeCard;
