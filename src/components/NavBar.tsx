import Image from 'next/image';

import menuItems from '../utils/menuItems';

export default function NavBar() {  
  return (
    <div className='navbar'>
      <header className='navbar__header'>
        <div className='navbar__header__content'>
          <section className='navbar__header__content__left'>
            <a href='/' className='navbar__header__content__left__brand-logo'>
              <Image
                src='/images/avatar.jpg'
                alt='logo'
                width='40'
                height='40'
                className='navbar__header__content__left__brand-logo__image'
              />
              <span className='navbar__header__content__left__title'>Ichibytes</span>
            </a>
          </section>
          <section className='navbar__header__content__right'>
            <nav className='navbar__header__content__right__nav' role='navigation'>
              <ul className='navbar__header__content__right__nav__list' aria-expanded='false'>
                {menuItems.map((item, index) => (
                  <li className='navbar__header__content__right__nav__list__item' key={index}>
                    <a className='navbar__header__content__right__nav__list__item__link' href={item.link} key={index}>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </section>
        </div>
      </header>
    </div>
  );
}