import styled from 'styled-components';
import spinner from './assets/spinner.png';
import { rotate } from './keyframes';

export const Spinner = styled.img.attrs({
  src: spinner,
})`
  animation: ${rotate} 0.5s linear infinite;
`;
