import styled from 'styled-components';

export const Container = styled.div`
  .buttons {
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid var(--gray);
    margin-top: 15px;

    > a {
      position: relative;
      font-weight: 500;
      font-size: 1.6rem;
      color: var(--gray);
      padding: 0 5px;
    }

    > a.active{
      color: var(--yellow);
    }

    > a.active:after {
      content: '';
      width: 100%;
      height: 4px;
      background: var(--yellow);
      position: absolute;
      bottom: -2px;
      left: 0;
    }

    @media (max-width: 1000px){
      flex-wrap: wrap; 
      border-bottom: 2px solid var(--gray);
      
      > a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

export const AnimesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;