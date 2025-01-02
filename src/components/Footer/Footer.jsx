import { Link } from 'react-router-dom';
import style from './Footer.module.css';
import classNames from 'classnames';

export const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={classNames(style.container, style.header__wrap)}>
                <Link to="/">
                    <div className={style.title}>
                        <h1>QRCodeGen</h1>
                        <p>создание и сканирование QR</p>
                    </div>

                </Link>
                <div className={style.footer_contact}>
                    <h3>Контакты</h3>
                    E-mail: <a href="mailto:devprime.agency@yandex.ru">devprime.agency@yandex.ru</a>
                </div>
                <p className={style.copyright}>2024, QrCodeGen</p>
            </div>
        </footer>
    );
};
