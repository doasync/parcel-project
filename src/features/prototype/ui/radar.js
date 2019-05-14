import styled from 'styled-components';
import radar from './assets/radar.png';
import { rotate } from './keyframes';

export const Radar = styled.img.attrs({
  src: radar,
})`
  animation: ${rotate} 3s linear infinite;
`;
