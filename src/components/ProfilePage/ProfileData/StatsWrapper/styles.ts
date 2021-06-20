import styled from 'styled-components';

export const Container = styled.span`
  display: inline-block;
  padding: 5px;
  border-radius: 5px;
  background-color: var(--light-black);
  margin: 5px;

  > h5 {
    color: var(--white);
    margin-right: 5px;
    font-size: 1.1rem;
    display: inline-block;
  }

  > span {
    color: var(--gray);
    font-size: 1.1rem;
  }
`;
