import { useEffect, useState } from 'react';
import { Container, MotoboyAvatar } from './styles';

export function MovingBackground(): JSX.Element {
  const [scroll, setScroll] = useState('');

  const handleScroll = () => {
    const totalHeight = window.innerHeight;
    const totalWidth = window.innerWidth;
    console.log(totalWidth);
    const parsedScroll = (window.pageYOffset / totalHeight) * 10;
    console.log(parsedScroll);
    setScroll(`${parsedScroll}%`);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <Container>
      <MotoboyAvatar src="images/motoboy.svg" position={scroll} />
    </Container>
  );
}
