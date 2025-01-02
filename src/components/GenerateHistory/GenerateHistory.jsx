import style from './GenerateHistory.module.css';
import { GENERATE_DATA } from "../../constant.js";
import { QRCodeSVG } from 'qrcode.react';

export const GenerateHistory = () => {
    const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');

    return (
        <div className={style.container}>
            <h3>История генерации QR</h3>
            {data.map((text, index) => (
                <div key={index} className={style.historyItem}>
                    <span className={style.text}>Используемый текст в QR: <b>{text}</b></span>
                    <QRCodeSVG value={text} size={80} />
                </div>
            ))}
        </div>
    );
};
