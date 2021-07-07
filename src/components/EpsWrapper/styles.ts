import styled from 'styled-components';
import { PlayFill } from 'styled-icons/bootstrap'
// @styled-icons/fa-solid/Play
export const Container = styled.div`
  position: relative;

  .rec.rec-item-wrapper {
    width: 210px;
  }

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
    top: 25%;
  }

  .rec.rec-arrow-left{
    position: absolute;
    left: 0;
    top: 25%;
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

export const Episode = styled.div`
  display: flex;
  flex-direction: column;
  width: 210px;
  max-width: 300px;
  padding: 0 5px;
  cursor: pointer;

  &:hover h4 {
    color: var(--white);
  }

  h4 {
    color: var(--gray);
    width: 100%;
    overflow-x: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    transition: 0.3s;
  }

  &:hover svg {
    background: var(--yellow);
    color: var(--black);
  }
`;

export const Video = styled.div`
  position: relative;
  width: 100%;
  height: 130px;

  > img {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  > span {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    background: rgba(0,0,0, 0.3);
    width: 100%;
  }
`;

export const PlayIcon = styled(PlayFill)`
  width: 50px;
  height: 50px;
  position: absolute;
  z-index: 3;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: rgba(0,0,0, 0.6);
  transition: 0.3s;
`;