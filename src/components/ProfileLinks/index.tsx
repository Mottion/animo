import { Container, LinkWrapper, UserIcon, HeartIcon, TVIcon, HistoryIcon, CheckedIcon, LogoutIcon } from './styles';

interface ProfileLinksProps {
  profileMenuClassName: string;
} 

function ProfileLinks({profileMenuClassName}: ProfileLinksProps) {

  return (
    <Container className={profileMenuClassName}>
      <LinkWrapper>
        <UserIcon />
        <a href="/">Meu Perfil</a>
      </LinkWrapper>
      <LinkWrapper>
        <HeartIcon />
        <a href="/">Meus favoritos</a>
      </LinkWrapper>
      <LinkWrapper>
        <TVIcon />
        <a href="/">assistindo</a>
      </LinkWrapper>
      <LinkWrapper>
        <HistoryIcon />
        <a href="/">Historia</a>
      </LinkWrapper>
      <LinkWrapper>
        <CheckedIcon />
        <a href="/">Completos</a>
      </LinkWrapper>
      <LinkWrapper>
        <LogoutIcon />
        <a href="/">sair da conta</a>
      </LinkWrapper>

    </Container>
  );
};

export default ProfileLinks;
