import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 30px;

  @media (max-width: 800px){
    flex-direction: column;
  }
`;

export const AnimeImage = styled.img`
  padding-right: 15px;
  margin-right: 15px;
  border-right: 2px solid var(--gray);

  @media (max-width: 800px){
    max-width: 200px;
    max-height: 250px;
    border-right: none;
  }
`;

export const AnimeInfos = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-weight: 500;
    font-size: 1.3rem;
    color: var(--white);

    > span {
      color: var(--gray);
    }
  }

  .title {
    font-size: 1.8rem;
    width: 100%;
    overflow-y: hidden;
    text-overflow: ellipses;
    color: var(--yellow);
  }
`;

export const GenresWrapper = styled.div`
  display: flex;
  padding: 10px 0;
  flex-wrap: wrap;
  
  > a {
    padding: 5px;
    background: var(--light-black);
    color: var(--white);
    margin: 0 5px;
    border-radius: 5px;
    margin-top: 5px;
  }
`;

export const Synopsis = styled.div`
  width: 100%;
  font-size: 1.1rem;
  font-weight: 500;
`;