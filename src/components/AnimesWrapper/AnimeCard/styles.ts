import styled from 'styled-components';
import { Star } from 'styled-icons/boxicons-solid';
import { Link } from 'react-router-dom'

export const Container = styled(Link)`
  width: 100%;
  max-width: 225px;
  margin: 0 10px;
  background-size: 100% 100%;
  height: 318px;
  position: relative;

  &:hover{
    border: 2px solid var(--yellow);
  }
`;

export const ScoreWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: flex-end;
  color: var(--yellow);
  background: #08070873;
  
`;

export const StarIcon = styled(Star)`
  width: 30px;
  height: 30px;
  color: var(--yellow);
`;

export const TittleWrapper = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  background: var(--black);
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: var(--white);
`;
