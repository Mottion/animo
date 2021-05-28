import styled from 'styled-components';
import { Search } from 'styled-icons/bootstrap';
import { Menu} from 'styled-icons/boxicons-regular';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 50px;

  background: var(--light-black);
  border-bottom: 2px solid rgb(90 90 90 / 50%);
  position: relative;
`;

export const LeftSide = styled.div`
  height: 100%;
  display: flex;
  padding: 0 40px;

  >a, div.genres {
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

    &:hover {
      background: var(--hover);
    }
  }

  > a, div.genres {
    font-weight: 500;
    color: var(--gray);
    font-size: 1.5rem;
    cursor: pointer;
  }

  > div.genres {
    position: relative;
  }

  span{
    width: 3px;
    height: 80%;
    background: rgb(90 90 90 / 10%);
    position: relative;
    margin: 0 5px;
    align-self: center;
  }

              
  @media (max-width: 1200px){
    padding: 0px;

    a:not(.logo), span, div.genres{
      display: none;
    }
  }
`;

export const RightSide = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 40px;

  @media (max-width: 1200px){
    padding: 0px;
  }
`;


export const SearchForm = styled.form`
  height: 100%;
  display: flex;
  align-items: center;
  max-width: 200px;
  width: 100vw;
  position: relative;

  @media (max-width: 550px){
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



export const Profile = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 100%;
  width: max-content;
  padding: 0 5px;
  position: relative;
  
  transition: 0.5s;

  &:hover {
    background: var(--hover);
  }

  @media (max-width: 1200px){
    display: none;
  }
`;

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  position: relative;
`;

export const AvatarImg = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 5px;
  border-radius: 50%;
`;

export const ProfileData = styled.div`
  padding: 5px 0px;
  display: flex;
  flex-direction: column;
  font-size: 1.3rem;
  font-family: "Roboto";
  font-weight: 500;
`;

export const BurguerMenu = styled(Menu)`
  width: 40px;
  height: 40px;
  color: var(--gray);

  @media (min-width: 1200px){
    display: none;
  }
`;