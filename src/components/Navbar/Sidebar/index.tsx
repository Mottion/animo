import {Link} from 'react-router-dom';
import {
  Container,
  TopSide,
  SearchForm,
  SearchIcon,
  SearchInput,
  CloseIcon,
  AvatarImage,
  ProfileData,
  LogoWrapper,
  LinksWrapper,
  Footer 
} from './styles';
import ProfileLinks from '../ProfileLinks';
import GenresList from '../GenresList';

interface SidebarProps{
  hasMobileMenu: boolean;
  toggleMenu: () => void;
  hasProfileMenu: (profileMenu: boolean) => void;
  profileMenu: boolean;
  profileMenuClassName: string;
  genresListClassName: string;
  hasGenresMenu: (genresMenu: boolean) => void;
  genresMenu: boolean;
}

function Sidebar({
  hasMobileMenu, 
  toggleMenu, 
  hasProfileMenu, 
  profileMenu, 
  profileMenuClassName,
  genresListClassName,
  hasGenresMenu,
  genresMenu
}: SidebarProps) {
  const className = hasMobileMenu? 'active' : '';
  
  return (
    <Container className={className}>
      <TopSide>
        <SearchForm>
          <SearchIcon />
          <SearchInput placeholder="pesquisar" type="text" />
        </SearchForm>
        <CloseIcon onClick={toggleMenu} />
        <AvatarImage src="/profileImage.jpg" />
        <ProfileData>AdrianElizandro</ProfileData>
      </TopSide>

      <LogoWrapper>
        <Link to="/" className="logo">
          <img src="/animoLogo.png" alt="animo logo" />
          <h1>Animo</h1>
        </Link>
      </LogoWrapper>

      <LinksWrapper>
        <div>
          <p onClick={ () => hasProfileMenu(!profileMenu)}>Meu Perfil</p>
          <ProfileLinks profileMenuClassName={profileMenuClassName} />
        </div>
        <Link to="/">Cronograma</Link>
        <Link to="/">Temporada</Link>
        <div>
          <p onClick={() => hasGenresMenu(!genresMenu)} >Generos</p>
          <GenresList genresListClassName={genresListClassName}/>
        </div>
      </LinksWrapper>

      <Footer>todos os direitos reservados @animoApp </Footer>

    </Container>
  );
};

export default Sidebar;
