import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1320px;
  padding: 0 10px;
  position: relative;

  @media (max-width: 1250px){
    max-width: 1050px;
  }

  @media (max-width: 1000px){
    max-width: 750px;
  }

  @media (max-width: 750px){
    max-width: 550px;
  }

  .rec.rec-arrow{
    z-index: 1;
    background: var(--white);
    color: var(--black);
  }

  .rec.rec-arrow:hover, .moreButton:hover{
    background: var(--yellow);
    color: var(--black);
  }

  .rec.rec-arrow-right{
    position: absolute;
    right: 0;
  }

  .rec.rec-arrow-left{
    position: absolute;
    left: 0;
  }

  .rec.rec-arrow:disabled {
    visibility: hidden;
  }

  .moreButton{
    position: absolute;
    right: 0;
    top: 50%;
    background: var(--white);
    color: var(--black);
    transform: translateY(-50%);
    min-width: 50px;
    height: 50px;
    border-radius: 25px;
    text-align: center;
    line-height: 50px;
    font-size: 1.6rem;
    animation-name: delay;
    animation-duration: 2s;
    opacity: 1;
  }


  @keyframes delay {
  0% {opacity: 0;}
  99% {opacity: 0;}
  100% {opacity: 1;}
}

`;
