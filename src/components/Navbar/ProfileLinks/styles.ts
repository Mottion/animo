import styled, {css} from 'styled-components';
import { User, Heart, Tv, History, Check, ArrowFromLeft } from 'styled-icons/boxicons-regular';


export const Container = styled.div`
  width: 100%;
  min-width: 180px;
  position: absolute;
  top: 100%;
  left: 0;
  background: var(--light-black);
  overflow-y: hidden;
  width: 100%;

  height: 0;
  transition: 0.5s;

  &.active{
    height: 270px;
    border: 2px solid rgb(90 90 90 / 50%);
  }

  @media (max-width: 1200px){
    display: inline-block;
    position: inherit;
    padding: 0;
    margin-top: 5px;

    div {
      box-shadow: none !important;
    } 
    &.active{
      height: 270px;
      border: 0;
    }
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  padding: 10px 5px;
  align-items: center;
  box-shadow: inset 0px 0px 3px #1f1f1f;

  > a {
    color: var(--white);
    font-size: 1.1rem;
  }
  &:hover {
    background: var(--hover);
  }

  @media (max-width: 1200px){
    box-shadow: none;
    a{
      box-shadow: none;
    } 
  }

`;

const iconCSS = css`
  width: 25px;
  height: 25px;
  color: var(--gray);
  margin-right: 10px;
`;

export const UserIcon = styled(User)`${iconCSS}`;

export const HeartIcon = styled(Heart)`${iconCSS}`;

export const TVIcon = styled(Tv)`${iconCSS}`;

export const HistoryIcon = styled(History)`${iconCSS}`;

export const CheckedIcon = styled(Check)`${iconCSS}`;

export const LogoutIcon = styled(ArrowFromLeft)`${iconCSS}`;