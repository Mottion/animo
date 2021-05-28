import { useState } from 'react';
import Sidebar from '../Sidebar';
import GenresList from '../GenresList';
import ProfileLinks from '../ProfileLinks';

import { 
  Container, 
  LeftSide, 
  RightSide, 
  SearchForm, 
  SearchIcon, 
  SearchInput, 
  Profile, 
  ProfileWrapper, 
  AvatarImg, 
  ProfileData,  
  BurguerMenu 
} from './styles';


function Navbar() {
  const [hasMobileMenu, setHasMobileMenu] = useState(false);
  const [profileMenu, hasProfileMenu] = useState(false);
  const [genresMenu, hasGenresMenu] = useState(false);

  const profileMenuClassName = profileMenu ? 'active' : '';
  const genresListClassName = genresMenu ? 'active' : '';

  function toggleMenu() {
    setHasMobileMenu(!hasMobileMenu);
  }

  return (
    <Container>
      <Sidebar
        hasMobileMenu={hasMobileMenu}
        toggleMenu={toggleMenu}
        hasProfileMenu={hasProfileMenu}
        profileMenu={profileMenu}
        profileMenuClassName={profileMenuClassName}
        genresListClassName={genresListClassName}
        hasGenresMenu={hasGenresMenu}
        genresMenu={genresMenu}
      />

      <LeftSide>
        <a href="/" className="logo">
          <img src="/animoLogo.png" alt="animo logo" />
          <h1>Animo</h1>
        </a>
        
        <span />

        <a href="/">Cronograma</a>
        <a href="/">Temporada</a>
        <div className="genres" onClick={() => hasGenresMenu(!genresMenu)}>
          <p>Generos</p>
          <GenresList genresListClassName={genresListClassName}/>
        </div>
        
      </LeftSide>

      <RightSide>
        <SearchForm>
          <SearchIcon />
          <SearchInput placeholder="pesquisar" type="text" />
        </SearchForm>

        <Profile>
          <ProfileWrapper onClick={ () => hasProfileMenu(!profileMenu)}>
            <AvatarImg src="/profileImage.jpg" alt="imagem de perfil do usuario"/>
            <ProfileData>AdrianElizandro</ProfileData>
          </ProfileWrapper>

          <ProfileLinks profileMenuClassName={profileMenuClassName}/>
        </Profile>

        <BurguerMenu onClick={toggleMenu} />

      </RightSide>
    </Container>
  );
};

export default Navbar;