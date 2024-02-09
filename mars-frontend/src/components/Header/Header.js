import { useState } from 'react';
import { logo, menuItems, ContextMenu } from '../index';

export default function Header({ onPurchaseClick }) {
  const [isContextMenuOpened, setIsContextMenuOpened] = useState(false);

  const handleBuyCLick = () => {
    onPurchaseClick((prev) => !prev);
  };

  const handleBurgerCLick = () => {
    setIsContextMenuOpened(true);
  };

  return (
    <header className='header'>
      <img
        className='header__logo util__link'
        src={logo}
        alt='Logo'
      />
      <nav className='header__menu-nav'>
        <ul className='header__menu-ul'>
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
        </ul>
        <button
          onClick={handleBuyCLick}
          className='header__menu_btn-buy'>
          Купить билеты
        </button>
      </nav>
      <button
        className='header__burger util__button'
        onClick={handleBurgerCLick}
      />
      {isContextMenuOpened && (
        <ContextMenu
          isContextMenuOpened={isContextMenuOpened}
          setIsContextMenuOpened={setIsContextMenuOpened}
        />
      )}
    </header>
  );
}
