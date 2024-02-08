import { useState, useEffect } from 'react';
import { Header, Promo, starsBgPosition } from '../index';

export default function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth / 3);
  const [bgPosition, setBgPosition] = useState(0);

  useEffect(() => {
    const delay = 100;
    let timeoutId;

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    const handleMouseMove = (event) => {
      setBgPosition(Math.ceil(event.clientX / windowWidth) - 1);
    };
    const handleMouseMoveWithDelay = (event) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        handleMouseMove(event);
      }, delay);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMoveWithDelay);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMoveWithDelay);
    };
  }, []);
  return (
    <div className={`app ${starsBgPosition[bgPosition]}`}>
      <div className='app__mistBg'></div>
      <Header />
      <Promo />
    </div>
  );
}
