import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  margin-top: 50px;

  .rec.rec-arrow{
    z-index: 2;
    background: var(--white);
    color: var(--black);
    
  }

  .rec.rec-arrow:hover{
    background: var(--yellow);
    color: var(--black);
  }

  .rec.rec-arrow-right{
    position: absolute;
    right: 0;
    top: 45%;
  }

  .rec.rec-arrow-left{
    position: absolute;
    left: 0;
    top: 45%;
  }

  .rec.rec-arrow:disabled {
    visibility: hidden;
  }

  .rec.rec-pagination {
    position: absolute;
    bottom: -20px;
  }

  .rec.rec-dot.rec-dot_active {
    box-shadow: 0 0 1px 3px var(--yellow);
    background-color: #fdca406e;
  }

  .rec.rec-dot:hover {
    box-shadow: 0 0 1px 3px var(--yellow);
  }

  .rec.rec-dot {
    box-shadow: 0 0 1px 2px var(--yellow);
  }
`;
