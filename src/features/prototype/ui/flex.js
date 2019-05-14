import styled, { css } from 'styled-components';

export const Flex = styled.div`
  display: flex;
  ${props => props.column && css`
    flex-direction: column;
  `}
`;
