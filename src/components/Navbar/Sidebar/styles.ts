import styled from 'styled-components';
import { LeftArrowAlt } from 'styled-icons/boxicons-regular';
import { Search } from 'styled-icons/bootstrap';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--light-black);
  transform: translateX(-100%);
  transition: 0.3s;
  overflow-y: scroll;

  @media (min-width: 1200px){
    display: none;
  }
  &.active{
    transform: translateX(0);
  }

`;

export const TopSide = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
  flex-shrink: 0;
`;


export const SearchForm = styled.form`
  width: 70%;
  height: 50px;
  display: flex;
  align-items: center;
  z-index: 2;
  position: absolute;
  right: 50px;

  @media (min-width: 550px){
    display: none;
  }
`;

export const SearchIcon = styled(Search)`
  width: 20px;
  height: 20px;
  color: var(--gray);
  position: absolute;
  right: 10px;
`;

export const SearchInput = styled.input`
  background: var(--hover);
  padding: 10px 30px 10px 10px;
  outline: 0;
  border: 0;
  border-radius: 10px;
  width: 100%;
  color: var(--white);

  &::placeholder{
    color: var(--gray);
  }
`;

export const CloseIcon = styled(LeftArrowAlt)`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  color: var(--gray);
  z-index: 2;
  background: var(--black);
  border-radius: 50%;
  cursor: pointer;
`;

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const ProfileData = styled.div`
  width: 100%;
  padding: 5px 0;
  background: linear-gradient(#0000004a 0% ,#000000 66%);
  color: var(--white);
  text-align: center;

  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 50px;
  background-color: #000000;

  a{
    display: flex;
    align-items: center;
    padding: 0 5px;

    transition: 0.5s;

    > img {
      width: 60px;
      height: 50px;
    }
    
    > h1 {
      font-weight: 600;
      color: var(--white);
      font-size: 2.2rem;
    }
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  
  > a, > div{
    color: var(--white);
    padding: 10px;
    text-align: center;
    box-shadow: inset 0px 0px 3px #1f1f1f;
  }

  > div {
    display: flex;
    flex-direction: column;
    padding: 5px 0;

    > p {
      cursor: pointer;
    }
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Footer = styled.div`
  font-size: 14px;
  color: var(--gray);
  font-weight: 400;
  text-align: center;
  width: 100%;
  margin-top: auto;
  padding: 10px 0;
  
`;