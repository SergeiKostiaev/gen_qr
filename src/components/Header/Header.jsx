import { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.css';
import classNames from 'classnames';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className={style.header}>
            <div className={classNames(style.container, style.header__wrap)}>
                <Link to="/" onClick={closeMenu} className={style.logo}>
                    <img src="/icons8.png" alt="qr"/>
                    <div className={style.title}>
                        <h2>QRCodeGen</h2>
                        <p>создание и сканирование QR</p>
                    </div>
                </Link>

                <div className={style.burger} onClick={toggleMenu}>
                    <span className={classNames(style.burger__line, { [style.open]: isMenuOpen })}></span>
                    <span className={classNames(style.burger__line, { [style.open]: isMenuOpen })}></span>
                    <span className={classNames(style.burger__line, { [style.open]: isMenuOpen })}></span>
                </div>

                <nav className={classNames(style.nav, { [style.nav_open]: isMenuOpen })}>
                    <ul className={style.nav__item}>
                        <li className={style.nav__link}>
                            <Link to="/" onClick={closeMenu}>Создание QR</Link>
                        </li>
                        <li className={style.nav__link}>
                            <Link to="/qr-scanner" onClick={closeMenu}>Сканирование QR</Link>
                        </li>
                        <li className={style.nav__link}>
                            <Link to="/history-generation" onClick={closeMenu}>История генирирования</Link>
                        </li>
                        <li className={style.nav__link}>
                            <Link to="/history-scan" onClick={closeMenu}>История скан QR</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};
