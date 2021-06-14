import { Container, ScoreWrapper, StarIcon, TittleWrapper } from './styles';

interface Props {
  malID: number;
  imageURL: string;
  title: string;
  score?: number;
  path?: boolean;
}

function AnimeCard({malID, imageURL, title, score, path}: Props) {

  return (
    <Container style={{backgroundImage: "url(" + imageURL + ")"}} to={path ? `anime/${malID}`: `${malID}` } >
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
