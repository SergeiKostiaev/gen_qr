import {QRCodeSVG} from 'qrcode.react';
import {useState, useRef} from "react";

import style from './QrCodeGeneration.module.css';
import {GENERATE_DATA} from '../../constant.js'

export const QrCodeGeneration = () => {
    const [value, setValue] = useState('')
    const [result, setResult] = useState('')
    const qrRef = useRef();
    const ClickHandler = () => {
        const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');

        localStorage.setItem(
            GENERATE_DATA,
            JSON.stringify([...prevData, value])
        );

        setResult(value);
        setValue(''); // Чистим сторку

    };

    const onChangeHandler = (event) => {
        setValue(event.target.value )  //Достаем значение из поля ввода и в носим в хук
        setResult("");
    };

    console.log("Result: ", result);
    // console.log(value);


    const downloadQRCode = (format) => {
        if (qrRef.current) {
            // Получаем SVG элемент
            const svgElement = qrRef.current.querySelector('svg');

            if (svgElement) {
                // Создаем элемент canvas
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');

                // Устанавливаем размеры canvas на основе размеров SVG
                const svgWidth = svgElement.width.baseVal.value;
                const svgHeight = svgElement.height.baseVal.value;
                canvas.width = svgWidth;
                canvas.height = svgHeight;

                // Используем библиотеку для конвертации SVG в изображение
                const svgData = new XMLSerializer().serializeToString(svgElement);
                const svgBlob = new Blob([svgData], { type: 'image/svg+xml' });
                const svgUrl = URL.createObjectURL(svgBlob);

                const img = new Image();
                img.onload = () => {
                    // Рисуем изображение SVG в canvas
                    ctx.drawImage(img, 0, 0);

                    // Создаем Data URL для сохранения в формате PNG/JPEG
                    const dataUrl = canvas.toDataURL(`image/${format}`);

                    // Создаем элемент для скачивания
                    const link = document.createElement('a');
                    link.href = dataUrl;
                    link.download = `qr_code.${format}`;
                    link.click();
                };
                img.src = svgUrl;
            }
        }
    };

    return (
        <div className={style.container}>
            <div className={style.container__result}>
                <p>ver: 1.0.0</p>
                <input className={style.input} type="text" value={value} onChange={onChangeHandler} placeholder="Введите ваш текст"/>
                <button className={style.container_result__btn} type="button" onClick={ClickHandler}>Сгенерировать QR</button>
                <div className={style.qr} ref={qrRef}>
                    {result !== '' && (
                        <QRCodeSVG value={result} size={200}/>  // Если True то рисуй компонент
                    )}
                </div>
                {result && (
                    <div className={style.btns}>
                        <a className={style.btns__link} onClick={() => downloadQRCode('png')}>Скачать как PNG</a>
                        <a className={style.btns__link} onClick={() => downloadQRCode('jpeg')}>Скачать как JPEG</a>
                    </div>
                )}
                <br/>
                <br/>
                <p>Ваш текст в QR: {result}</p>
                <div className={style.about}>
                    <h3>О сервисе: </h3>
                    <p>QR-коды (Quick Response) — это двумерные штрихкоды, которые хранят информацию, считываемую с помощью камеры смартфона или специального сканера. Сервисы генерации QR-кодов позволяют пользователям создавать такие коды для различных целей, от маркетинга до удобного обмена информацией. <br/><br/>В нашем сервисе Вы сможете создать QR код, сканировать через вашу камеру на компьютере, так же посмотреть историю создания Ваших QR!</p>
                </div>

                <div className={style.about__example}>
                    <h3>Примеры использования QR-кодов: </h3>
                    <ul>
                        <li><b>Маркетинг:</b> &nbsp;Ссылки на промо-акции, сайты или приложения.</li>
                        <li><b>Образование:</b> &nbsp; Доступ к учебным материалам или расписанию занятий.</li>
                        <li><b>Розничная торговля:</b> &nbsp; Лектронные чеки, скидочные купоны.</li>
                        <li><b>Рестораны:</b> &nbsp; Меню без бумаги.</li>
                        <li><b>Транспорт:</b> &nbsp; Электронные билеты.</li>
                        <li><b>Здравоохранение:</b> &nbsp; Доступ к медицинской карте.</li>
                    </ul>
                </div>
                <div className={style.about}>
                    <h3>Мы становимся лучше: </h3>
                    <p>Совсем скоро появится новый функционал, создание динамических QR, статистика сканирования созданных у нас QR кодов, API QR сервиса и многое другое!</p>
                </div>
            </div>

        </div>

    )
}
