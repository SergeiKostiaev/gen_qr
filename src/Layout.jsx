import {QrCodeGeneration} from "./components/QrCodeGeneration/QrCodeGeneration.jsx";
import {QrCodeScanner} from './components/QrCodeScan/QrCodeScaner.jsx'
import {Header} from "./components/Header/Header.jsx";
import { Routes, Route } from 'react-router-dom';
import {GenerateHistory} from "./components/GenerateHistory/GenerateHistory.jsx";
import {ScanHistory} from "./components/ScanHistory/ScanHistory.jsx";
import {Footer} from "./components/Footer/Footer.jsx";



const Layout = () => {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<QrCodeGeneration />} />
                <Route path="/qr-scanner" element={<QrCodeScanner />} />
                <Route path="/history-generation" element={<GenerateHistory/>} />
                <Route path="/history-scan" element={<ScanHistory/>} />
            </Routes>
            <Footer/>
        </div>
    )
}

export { Layout };