import { arrow, bgTextClip } from '../index';

export default function Promo() {
  return (
    <section className='promo'>
      <img
        src={arrow}
        alt='styled arrow'
        className='promo__bgArrow'
      />
      <div className='promo__container-text'>
        <span className='promo__description'>Точка назначения:</span>
        <div className='promo__holder'>
          <video
            className='promo__video'
            autoPlay
            loop
            muted
            src={bgTextClip}></video>
          <div className='promo__mars-text-conteiner'>
            <h1 className='promo__mars-text'>MAPC</h1>
          </div>
        </div>
      </div>
    </section>
  );
}
