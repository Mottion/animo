import {Link} from 'react-router-dom';
import { 
  Container, 
  LinkWrapper, 
  UserIcon, 
  HeartIcon, 
  TVIcon, 
  HistoryIcon, 
  CheckedIcon, 
  LogoutIcon 
} from './styles';

interface ProfileLinksProps {
  profileMenuClassName: string;
} 

function ProfileLinks({profileMenuClassName}: ProfileLinksProps) {

  return (
    <Container className={profileMenuClassName}>
      <LinkWrapper>
        <UserIcon />
        <Link to="/myProfile/all">Meu Perfil</Link>
      </LinkWrapper>
      <LinkWrapper>
        <HeartIcon />
        <Link to="/myProfile">Meus favoritos</Link>
      </LinkWrapper>
      <LinkWrapper>
        <TVIcon />
        <Link to="/myProfile/watching">assistindo</Link>
      </LinkWrapper>
      <LinkWrapper>
        <HistoryIcon />
        <Link to="/myProfile">Historia</Link>
      </LinkWrapper>
      <LinkWrapper>
        <CheckedIcon />
        <Link to="/myProfile/completed">Completos</Link>
      </LinkWrapper>
      <LinkWrapper>
        <LogoutIcon />
        <Link to="/myProfile">sair da conta</Link>
      </LinkWrapper>

    </Container>
  );
};

export default ProfileLinks;
