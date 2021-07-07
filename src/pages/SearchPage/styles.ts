import styled from 'styled-components';
import { EmojiSad } from 'styled-icons/entypo';
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 60px 20px;

  > p {
    color: var(--white);
    font-size: 1.6rem;

    span {
      color: var(--yellow);
      text-decoration: underline;
    }
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  > h4 {
    width: 100%;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    text-align: center;
    color: var(--gray);
    font-size: 1.9rem;
  }
`;

export const SadIcon = styled(EmojiSad)`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  width: 100%;
  max-width: 400px;
  color: rgb(21 21 21 / 36%);
`;

export const AnimeSearchContainer = styled(Link)`
  width: 100%;
  display: flex;
  box-shadow: inset 0px 0px 0px 1px #48484882;
  border-radius: 10px;
  margin-top: 10px;
  color: var(--white);
  overflow: hidden;
  max-height: 150px;

  > img {
    width: 100%;
    max-width: 150px;
    max-height: 150px;
    padding-right: 10px;
    border-radius: 10px;
  }

  > div {
    padding: 9px 0;
    display: flex;
    flex-direction: column;

    > p span{
      color: var(--gray);
    }
  }

  .synopsis {
    margin-top: auto;
    overflow: hidden;
  }

  @media (max-width: 600px){
    > img {
      width: 115px;
    }
  }

  @media (max-width: 400px){
    flex-direction: column;
    max-height: none;

    > img {
      max-width: 100%;
      padding: 0;
      max-height: none;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    > div{
      padding: 5px 10px;
    }
  }
`;