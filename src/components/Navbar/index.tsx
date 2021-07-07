import {FormEvent, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import Sidebar from './Sidebar';
import GenresList from './GenresList';
import ProfileLinks from './ProfileLinks';

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
  const [search, setSearch] = useState('');
  const history = useHistory()

  const profileMenuClassName = profileMenu ? 'active' : '';
  const genresListClassName = genresMenu ? 'active' : '';

  function toggleMenu() {
    setHasMobileMenu(!hasMobileMenu);
  }

  function handleSearch(event: FormEvent) {
    event.preventDefault();
    history.push(`/search/${search}`)
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
        setSearch={setSearch}
        search={search}
        handleSearch={handleSearch}
      />

      <LeftSide>
        <Link to="/" className="logo">
          <img src="/animoLogo.png" alt="animo logo" />
          <h1>Animo</h1>
        </Link>
        
        <span />

        <Link to="/">Cronograma</Link>
        <Link to="/">Temporada</Link>
        <div className="genres" onClick={() => hasGenresMenu(!genresMenu)}>
          <p>Generos</p>
          <GenresList genresListClassName={genresListClassName}/>
        </div>
        
      </LeftSide>

      <RightSide>
        <SearchForm onSubmit={event => handleSearch(event)}>
          <SearchIcon />
          <SearchInput 
            placeholder="pesquisar" 
            type="text" 
            onChange={event => setSearch(event.target.value)}
            value={search}
          />
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