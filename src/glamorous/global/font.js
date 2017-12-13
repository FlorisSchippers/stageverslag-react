import { injectGlobal } from 'styled-components';

export default injectGlobal`
  #root {
    overflow: hidden;
  }
  
  @font-face {
    font-family: 'hero_fontregular';
    src: url('../fonts/hero_v0.004-webfont.eot');
    src: url('../fonts/hero_v0.004-webfont.eot?#iefix') format('embedded-opentype'),
         url('../fonts/hero_v0.004-webfont.woff2') format('woff2'),
         url('../fonts/hero_v0.004-webfont.woff') format('woff'),
         url('../fonts/hero_v0.004-webfont.ttf') format('truetype'),
         url('../fonts/hero_v0.004-webfont.svg#hero_fontregular') format('svg');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'gothambook';
    src: url('../fonts/gotham-book.eot');
    src: url('../fonts/gotham-book.eot?#iefix') format('embedded-opentype'),
         url('../fonts/gotham-book.woff2') format('woff2'),
         url('../fonts/gotham-book.woff') format('woff'),
         url('../fonts/gotham-book.ttf') format('truetype'),
         url('../fonts/gotham-book.svg#gotham-book') format('svg');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'gothammedium';
    src: url('../fonts/gotham-medium.eot');
    src: url('../fonts/gotham-medium.eot?#iefix') format('embedded-opentype'),
         url('../fonts/gotham-medium.woff2') format('woff2'),
         url('../fonts/gotham-medium.woff') format('woff'),
         url('../fonts/gotham-medium.ttf') format('truetype'),
         url('../fonts/gotham-medium.svg#gotham-medium') format('svg');
    font-weight: normal;
    font-style: normal;
  }
`;
