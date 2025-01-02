import { Link } from 'react-router-dom';
import style from './Header.module.css';
import classNames from 'classnames';

export const Header = () => {
    return (
        <header className={style.header}>
            <div className={classNames(style.container, style.header__wrap)}>
                <Link to="/">
                    <div className={style.title}>
                        <h1>QRCodeGen</h1>
                        <p>создание и сканирование QR</p>
                    </div>

                </Link>
                <nav className={style.nav}>
                    <ul className={style.nav__item}>
                        <li className={style.nav__link}>
                            <Link to="/">Создание QR</Link>
                        </li>
                        <li className={style.nav__link}>
                            <Link to="/qr-scanner">Сканирование QR</Link>
                        </li>
                        <li className={style.nav__link}>
                            <Link to="/history-generation">История генирирования</Link>
                        </li>
                        <li className={style.nav__link}>
                            <Link to="/history-scan">История скан QR</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};
