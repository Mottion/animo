import { Container, ScoreWrapper, StarIcon, TittleWrapper } from './styles';

interface Props {
  malID: number;
  imageURL: string;
  title: string;
  score: number;
}

function AnimeCard({malID, imageURL, title, score}: Props) {

  return (
    <Container style={{backgroundImage: "url(" + imageURL + ")"}} to={`anime/${malID}`} >
      <ScoreWrapper>
        <StarIcon />
        <span>{score}</span>
      </ScoreWrapper>

      <TittleWrapper>
        {title}
      </TittleWrapper>
    </Container>
  );
};

export default AnimeCard;
