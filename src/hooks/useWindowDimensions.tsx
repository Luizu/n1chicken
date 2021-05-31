import { useState, useEffect } from 'react';

export default function useWindowDimensions() {
  function getWindowDimensions() {
    if (process.browser) {
      const { innerWidth: width, innerHeight: height } = window;
      return {
        width,
        height,
      };
    }
    return {
      width: 500,
      height: 500,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
