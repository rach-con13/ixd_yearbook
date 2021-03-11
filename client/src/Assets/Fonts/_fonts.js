import {createGlobalStyle} from 'styled-components';
import Chonburi from './Chonburi-Regular.ttf';
import PlayfairDisplayBold from './PlayfairDisplayBold.woff';
import MajorMonoTTF from './MajorMonoDisplay-Regular.ttf';
import ABeeZee from './ABeeZee-Regular.ttf';
import PoppinsMedium from './Poppins-Medium.ttf';
import PoppinsSemiBold from './Poppins-SemiBold.ttf';
import NexaBook from './nexa-book.ttf';
import NexaBold from './nexa-bold.ttf';
const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Chonburi';
    src: url(${Chonburi}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: auto;
  }

  @font-face {
    font-family: 'Playfair Display';
    src: url(${PlayfairDisplayBold}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: auto;
  }
  @font-face {
    font-family: 'ABeeZee';
    src: url(${ABeeZee}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: auto;
  }
  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsMedium}) format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: auto;
  }
  @font-face {
    font-family: 'Poppins';
    src:url(${PoppinsSemiBold}) format('truetype');
    font-weight:700;
    font-style:normal;
    font-display:auto;
  }

  @font-face {
    font-family: 'Nexa ';
    src: url(${NexaBold}) format('truetype');
    font-weight: 700;
    font-style: normal;
    font-display: auto;
  }
  @font-face {
    font-family: 'Nexa';
    src:url(${NexaBook}) format('truetype');
    font-weight:400;
    font-style:normal;
    font-display:auto;
  }

 
  p {
    font-family: 'Nexa';
    font-weight:700;
   
    
  }
`;
export default GlobalStyle;
