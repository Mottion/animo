import { Container, ScoreWrapper, StarIcon, TittleWrapper } from './styles';

interface Props {
  imageURL: string;
  title: string;
  pathURL: string;
  score?: number;
}

function AnimeCard({ imageURL, title, pathURL, score}: Props) {

  return (
    <Container style={{backgroundImage: "url(" + imageURL + ")"}} to={pathURL} >
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
