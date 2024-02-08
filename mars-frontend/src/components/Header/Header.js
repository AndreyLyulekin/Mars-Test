import { logo, menuItems } from '../index';

export default function Header() {
  return (
    <header className='header'>
      <img
        className='header__logo util__link'
        src={logo}
        alt='Logo'
      />
      <nav className='header__menu-nav'>
        <ul className='header__menu-ul'>
          {menuItems[0].pages.map((linkPage, i) => (
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
        <button className='header__menu_btn-buy'>{menuItems[1].text}</button>
      </nav>
    </header>
  );
}
