import {useParams} from "react-router-dom";

import ProfileData from '../../components/ProfilePage/ProfileData';
import { Container } from './styles';

interface Params {
  info: string;
}

function ProfilePage() {
  const { info }: Params  = useParams();
  
  return (
    <Container>
      <ProfileData />


    </Container>
  );
};

export default ProfilePage;
