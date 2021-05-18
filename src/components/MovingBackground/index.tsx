import { useEffect, useState } from 'react';
import { Container, MotoboyAvatar } from './styles';

export function MovingBackground(): JSX.Element {
  const [scroll, setScroll] = useState('');
  const [scrollMobile, setScrollMobile] = useState('');

  const handleScroll = () => {
    const windowSize = window.document.body.scrollHeight;

    const parsedScroll = (window.pageYOffset * 1000) / windowSize;
    const parsedScrollMobile = parsedScroll / 6;
    setScroll(`translateX(${parsedScroll}%)`);
    setScrollMobile(`translateX(${parsedScrollMobile}%)`);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <Container>
      <MotoboyAvatar
        src="images/motoboy.svg"
        position={scroll}
        positionMobile={scrollMobile}
      />
    </Container>
  );
}
