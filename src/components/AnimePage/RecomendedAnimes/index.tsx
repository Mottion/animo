import { Container } from './styles';
import Carousel from 'react-elastic-carousel';
import breakPoints from '../../../utils/breakPoints'
import AnimesWrapper from '../../AnimesWrapper';

interface Props {
  id: string;
}

function RecomendedAnimes({id}: Props) {
  return (
    <AnimesWrapper getURL={`https://api.jikan.moe/v3/anime/${id}/recommendations`} getType="recommendations">
      
    </AnimesWrapper>
  );
};

export default RecomendedAnimes;
