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
        <div className='wrapper'>
          <video
            className='clipped-video'
            muted
            loop
            autoPlay>
            <source src={bgTextClip}></source>
          </video>
          <svg
            className='clipped-svg'
            height='100%'
            width='100%'>
            <clipPath
              id='text-overlay'
              width='100%'
              height='100%'>
              <text
                className='clipped-text'
                id='title'
                dy='1.58em'>
                MAPC
              </text>
            </clipPath>
          </svg>
        </div>
      </div>
    </section>
  );
}
