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

        <div className='holder'>
          <video
            className='video'
            autoPlay
            loop
            muted
            src={bgTextClip}></video>
          <div className='section'>
            <h1 className='mars'>MAPC</h1>
          </div>
        </div>
      </div>
    </section>
  );
}
