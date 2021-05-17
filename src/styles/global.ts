import { createGlobalStyle } from 'styled-components';

export const media = {
  laptop: '@media(min-width: 1000px)',
  desktop: '@media(min-width: 1400px)',
};

export default createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720PX) {
    html {
      font-size: 87.5%;
    }
  }

  body{
    overflow-x: hidden;
  }

  body, input, button {
    font: 14px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }

  @keyframes pulseEffect {
    0% {
      transform: scale(1); /* scaling to 1 */
    }
    50% {
      transform: scale(1.2); /* increasing the size */
    }
    100% {
      transform: scale(1); /* seeting back to initial size */
    }
  }
`;
