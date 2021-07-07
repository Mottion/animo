import axios from 'axios';
import { useState, useEffect } from 'react';

import StatsWrapper from '../StatsWrapper';
import { 
  Container, 
  ProfileInfoWrapper,
  AnimeStats, 
  InfoWrapper, 
  GenreIcon, 
  LocationIcon,
  BirthdayIcon,
  JoinedIcon,
  AboutContainer
} from './styles';

interface ProfileDataProps {
  username: string;
  image_url: string;
  gender: string;
  location: string;
  birthday: string;
  joined: string;
  anime_stats: {
    days_watched: number;
    mean_score: number;
    watching: number;
    completed: number;
    on_hold: number;
    dropped: number;
    plan_to_watch: number;
    total_entries: number;
    rewatched: number;
    episodes_watched: number;
  };
  about: string;
}

function ProfileData() {
  const [profileData, setProfileData] = useState({} as ProfileDataProps);

  useEffect(() => {
    // pegar infos do anime
    axios.get(`https://api.jikan.moe/v3/user/AdrianElizandro`).then(function(response){
      setProfileData(response.data);
    })
    .catch(function (error: any) {
      console.log('ocorreu um erro -> ' + error);
    });
  }, []);


  return (
    <Container>
      <img src={profileData.image_url} alt="imagem do usuario" />

        <ProfileInfoWrapper>
          <p>{profileData.username}</p>
          
          <InfoWrapper>
            <GenreIcon />
            <h4>Genero: </h4>
            <span>{profileData.gender}</span>
          </InfoWrapper>
          <InfoWrapper>
            <LocationIcon />
            <h4>Localização: </h4>
            <span>{profileData.location}</span>
          </InfoWrapper>
          <InfoWrapper>
            <BirthdayIcon />
            <h4>Aniversario: </h4>
            <span>{profileData.birthday?.slice(0, 10)}</span>
          </InfoWrapper>
          <InfoWrapper>
            <JoinedIcon />
            <h4>Entrada: </h4>
            <span>{profileData.joined?.slice(0, 10)}</span>
          </InfoWrapper>
        </ProfileInfoWrapper>

        <AnimeStats>
          <StatsWrapper title="dias assistidos:" content={profileData?.anime_stats?.days_watched} />
          <StatsWrapper title="media de voto:" content={profileData?.anime_stats?.mean_score} />
          <StatsWrapper title="assistindo:" content={profileData?.anime_stats?.watching} />
          <StatsWrapper title="completados:" content={profileData?.anime_stats?.completed} />
          <StatsWrapper title="em espera:" content={profileData?.anime_stats?.on_hold} />
          <StatsWrapper title="desistidos" content={profileData?.anime_stats?.dropped} />
          <StatsWrapper title="plenejando assistir:" content={profileData?.anime_stats?.plan_to_watch} />
          <StatsWrapper title="entradas totais:" content={profileData?.anime_stats?.total_entries} />
          <StatsWrapper title="reassistidos:" content={profileData?.anime_stats?.rewatched} />
          <StatsWrapper title="episodios assistidos:" content={profileData?.anime_stats?.episodes_watched} />
        </AnimeStats>

      <AboutContainer>{profileData.about}</AboutContainer>
    </Container>
  )

};

export default ProfileData;
