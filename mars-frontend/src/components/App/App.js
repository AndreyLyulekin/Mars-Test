import { useState, useEffect } from 'react';
import { Header, Promo, starsBgPosition, Booking } from '../index';

export default function App() {
  const [windowWidth, setWindowWidth] = useState(() => window.innerWidth / 3);
  const [bgPosition, setBgPosition] = useState(0);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(false);

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
  }, [windowWidth]);

  useEffect(() => {
    setTimeout(() => {
      setIsPageLoading(true);
    }, 1000);
  }, []);
  return (
    <>
      {isPageLoading ? (
        <div className={`app ${starsBgPosition[bgPosition]}`}>
          <div className='app__mistBg' />
          <Header onPurchaseClick={setIsBookingOpen} />
          <Promo />
          {isBookingOpen && <Booking onPurchaseClick={setIsBookingOpen} />}
        </div>
      ) : (
        <div className='app__preloaderBg'>
          <div className='app__preloader' />
        </div>
      )}
    </>
  );
}
