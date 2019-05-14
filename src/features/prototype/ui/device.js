import styled from 'styled-components';
import iPhone from './assets/i-phone.png';
import iWatch from './assets/i-watch.png';
import macBook from './assets/mac-book.png';

const deviceImageMap = {
  'i-phone': iPhone,
  'i-watch': iWatch,
  'mac-book': macBook,
};

export const Device = styled.img.attrs(props => ({
  src: deviceImageMap[props.kind],
}))`
  margin: 20px 10px;
`;
