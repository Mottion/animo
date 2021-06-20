import styled, {css} from 'styled-components';
import { BirthdayCake, Transgender } from 'styled-icons/fa-solid' 
import { Map } from 'styled-icons/boxicons-regular' 
import { SensorDoor } from 'styled-icons/material-rounded' 

export const Container = styled.div`
  padding: 10px 0;
  width: 100%;
  display: flex;

  > img {
    width: 100%;
    height: 100%;
    max-width: 250px;
    max-height: 250px;
  }
`;

export const ProfileDataWrapper = styled.div`
  width: 100%;
  padding: 0 10px;
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    width: 100%;
  }
`;

export const ProfileInfoWrapper = styled.div`
  display: inline-block;
  width: 30%;

  > p {
    font-size: 1.8rem;
  }
`;

export const AnimeStats = styled.div`
  padding: 0 10px;
  width: 100%;
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
  width: 100%;
  height: 100%;
  margin-top: 5px;
`;