import {useParams} from "react-router-dom";

import ProfileData from '../../components/ProfileData';
import UserAnimes from '../../components/UserAnimes';
import { Container } from './styles';


function ProfilePage() {
  const { type }: {type: string} = useParams();
  
  return (
    <Container>
      <ProfileData />

      <UserAnimes type={type} />

    </Container>
  );
};

export default ProfilePage;
