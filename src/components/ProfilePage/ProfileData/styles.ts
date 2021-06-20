import styled, {css} from 'styled-components';
import { BirthdayCake, Transgender } from 'styled-icons/fa-solid' 
import { Map } from 'styled-icons/boxicons-regular' 
import { SensorDoor } from 'styled-icons/material-rounded' 

export const Container = styled.div`
  padding: 10px 0;
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr 3fr;
  grid-template-rows: auto auto;
  grid-template-areas: 
  "IMG PDW ASW" 
  "IMG BIO BIO";

  > img {
    grid-area: IMG;
    height: 100%;
    width: 100%;
    margin-right: 10px;
  }

  @media (max-width: 1120px){
    grid-template-columns: auto 2fr 4fr;
    grid-template-rows: auto auto;
    grid-template-areas: 
  "IMG ASW ASW" 
  "PDW BIO BIO";
  }

  @media (max-width: 641px){
    grid-template-columns: auto;
    grid-template-rows: auto auto auto auto;
    grid-template-areas: 
    "IMG" 
    "PDW"
    "ASW"
    "BIO"
  ;

  > img {
    max-width: 300px;
  }
  }
`;

export const ProfileInfoWrapper = styled.div`
  display: inline-block;
  grid-area: PDW;
  margin-left: 10px;
  min-width: 260px;

  > p {
    font-size: 1.8rem;

  }
  @media (max-width: 1120px){
      margin-top: 10px;
  }
`;

export const AnimeStats = styled.div`
  padding: 0 10px;
  grid-area: ASW;
`;

export const InfoWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;

  > h4 {
    font-size: 1.2rem;
    color: var(--yellow);
    margin-right: 4px;
  }

  > span {
    color: var(--white);
    font-size: 1.2rem;
  }
`;

const iconCSS = css`
  width: 25px;
  height: 25px;
  color: var(--yellow);
`;

export const GenreIcon = styled(Transgender)`${iconCSS}`;
export const LocationIcon = styled(Map)`${iconCSS}`;
export const BirthdayIcon = styled(BirthdayCake)`${iconCSS}`;
export const JoinedIcon = styled(SensorDoor)`${iconCSS}`;

export const AboutContainer = styled.div`
  padding: 10px;
  border: 2px solid rgb(90 90 90 / 50%);
  background: var(--light-black);
  border-radius: 5px;
  color: var(--gray);
  margin-top: 10px;
  margin-left: 10px;
  grid-area: BIO;
`;