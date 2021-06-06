import styled from 'styled-components';
import { Star } from 'styled-icons/boxicons-solid';

export const Container = styled.a`
  width: 225px;
  height: 318px;
  position: relative;
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
`;
