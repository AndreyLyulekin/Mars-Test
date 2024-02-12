import { arrow, MobileComponent, DesktopComponent } from '../index';

export default function Promo() {
  const isMobile = /iPhone|iPad|iPod|macintel/i.test(navigator.platform);
  const componentToRender = isMobile ? <MobileComponent /> : <DesktopComponent />;
  return (
    <section className='promo'>
      <img
        src={arrow}
        alt='styled arrow'
        className='promo__bgArrow'
      />
      <div className='promo__container-text'>
        <span className='promo__description'>Точка назначения:</span>
        {componentToRender}
      </div>
    </section>
  );
}
