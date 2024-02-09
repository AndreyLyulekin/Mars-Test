import { useEffect } from 'react';

import { popupInputs, BookingArticle } from '../index';

export default function Booking({ onPurchaseClick }) {
  const handleClick = () => {
    onPurchaseClick((prev) => !prev);
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
          className='booking__close util__button'
        />
      </div>
      <form className='booking__form'>
        {popupInputs.map((item, index) => (
          <BookingArticle
            item={item}
            key={index}
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
