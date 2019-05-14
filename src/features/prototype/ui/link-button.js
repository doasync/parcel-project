import styled from 'styled-components';

export const LinkButton = styled.button`
  justify-self: end;
  background: none;
  color: inherit;
  border: none;
  padding: 10px 0;
  font: inherit;
  cursor: pointer;
  
  &:active, &:focus {
    outline: none;
    border: none;
  }
`;
