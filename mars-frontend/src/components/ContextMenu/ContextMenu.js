import { useEffect, useState } from 'react';
import { menuItems } from '../index';

export default function ContextMenu({ setIsContextMenuOpened, isContextMenuOpened }) {
  const [animStyles, setAnimStyles] = useState('context__menu');
  const handleOverlayClick = (e) => {
    if (e.target?.className?.includes('contextMenu__overlay')) {
      handleCloseButtonClick();
    }
  };

  const handleCloseButtonClick = () => {
    setIsContextMenuOpened((prev) => !prev);
  };

  useEffect(() => {
    setAnimStyles('context__menu context__menu_opened');
  }, []);
  return (
    <div
      className='contextMenu__overlay'
      onMouseDown={(e) => handleOverlayClick(e)}>
      <div className={animStyles}>
        <button
          className='contextMenu__close util__button'
          onClick={handleCloseButtonClick}></button>
        <nav className='contextMenu__nav'>
          {menuItems.map((linkPage, i) => (
            <li
              className='header__menu-item'
              key={i}>
              <a
                href={`${linkPage.link}`}
                className='header__menu-link'>
                {linkPage.text}
              </a>
            </li>
          ))}
        </nav>
      </div>
    </div>
  );
}
