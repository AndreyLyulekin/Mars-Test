import { useEffect } from 'react';

import { popupInputs, BookingArticle } from '../index';

export default function Booking({ setIsBookingOpen }) {
  const handleClick = () => {
    setIsBookingOpen((prev) => !prev);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      handleClick();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <section className='booking'>
      <div className='booking__header-container'>
        <h2 className='booking__title'>Бронирование билетов</h2>
        <button
          onClick={handleClick}
          className='booking__close util__button'></button>
      </div>
      <form className='booking__form'>
        {popupInputs.map((item, ind) => (
          <BookingArticle
            item={item}
            key={ind}
          />
        ))}
        <button
          type='submit'
          className='booking__buy-btn util__button'>
          Купить билеты
        </button>
      </form>
    </section>
  );
}
