import { useState, useEffect } from 'react';
import { arrow } from '../index';

export default function Promo() {
  const [arrowClassnames, setArrowClassnames] = useState('promo__bgArrow-short');

  useEffect(() => {
    setArrowClassnames((prev) => prev + ' promo__bgArrow-long');
  }, []);

  return (
    <section className='promo'>
      <img
        src={arrow}
        alt='styled arrow'
        className={`${arrowClassnames}`}
      />
      <div className='promo__container-text'>
        <span className='promo__description'>Точка назначения:</span>
        {/* <h1 className='promo__video-backgrond'>Your Text Here</h1> */}
      </div>
    </section>
  );
}
