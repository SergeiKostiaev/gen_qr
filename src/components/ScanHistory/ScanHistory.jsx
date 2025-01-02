import style from './ScanHistory.module.css'

import {SCAN_DATA} from '../../constant.js'
import {QRCodeSVG} from "qrcode.react";
export const ScanHistory = () => {

    const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');
    return (
        <div className={style.container}>
           {data.map((text, index) => (
               <p key={index}>
                   {text}

                   <QRCodeSVG value={text} size={80}/>
               </p>
           ))}
        </div>
    )
}