import { Scanner } from '@yudiel/react-qr-scanner';
import {useState} from "react";

import style from './QrCodeScanner.module.css'


import {SCAN_DATA} from '../../constant.js'
export const QrCodeScanner = () => {
    const [scan, setScan] = useState(null)
    const scanHandler = (result) => {
        setScan(result[0].rawValue);

        const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

        localStorage.setItem(
            SCAN_DATA,
            JSON.stringify([...prevData, result[0].rawValue]));
    }

    // console.log('scan', SCAN_DATA)

    return (
        <div className={style.scan__box}>
            <p>Результат сканирования: {scan}</p>
            <Scanner
                // allowMultiple={true}
                onScan={scanHandler}
                components={{
                    audio: false
                }}
                styles={{
                    container: {width: 350, height: 10}
                }}
            />
        </div>
)};