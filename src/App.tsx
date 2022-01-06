import React from 'react';
import 'normalize.css';
import './styles/app.scss';
import mainBg from './images/main-bg.png';
import { Header } from './components/layout/Header/Header';
import { Footer } from './components/layout/Footer/Footer';
import { About } from './components/About/About';

function App() {
    return (
        <div className="app" style={{ backgroundImage: `url(${mainBg})` }}>
            <Header />
            <div className="main-wrapper">
                <About />
            </div>
            <Footer />
        </div>
    );
}

export default App;
