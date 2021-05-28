import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;
  display: flex;
  flex-wrap: wrap;
  background: var(--light-black);
  position: absolute;
  top: 100%;
  left: 0;
  transform: translateX(-100px);
  overflow-y: hidden;
  height: 0;
  transition: 0.5s;

  &.active {
    height: 664px;
    border: 2px solid rgb(90 90 90 / 50%);
  }

  @media (max-width: 1200px){
    position: inherit;
    transform: translateX(0px);
    margin-top: 5px;

    &.active{
      border: none;
    }
  }
`;

export const Genre = styled.a`
  width: 50%;
  padding: 4px;
  text-align: center;
  color: var(--white);  
  font-size: 18px;
  box-shadow: inset 0px -3px 3px #1f1f1f;

  &:hover {
    background: var(--hover);
  }

  @media (max-width: 1200px){
    box-shadow: inset 0px 0px 3px #1f1f1f;
  }
`;