export const MobileComponent = () => {
  return <h2 className='text-with-background'>MAPC</h2>;
};

export const DesktopComponent = () => {
  return (
    <div className='promo__wrapper'>
      <video
        className='promo__clipped-video'
        muted
        loop
        autoPlay>
        <source src='https://educourseshub.com/wp-content/uploads/2024/02/Mars-bg-clip-text-3.m4v'></source>
      </video>
      <svg className='promo__clipped-svg'>
        <clipPath
          id='text-overlay'
          width='100%'
          height='100%'>
          <text
            className='promo__clipped-text'
            id='title'
            dy='1.58em'>
            MAPC
          </text>
        </clipPath>
      </svg>
    </div>
  );
};
