import React from 'react';
import 'normalize.css';
import './styles/app.scss';
import { Experience } from 'components/Experience/Experience';
import { Education } from 'components/Education/Education';
import { Portfolios } from 'components/Portfolios/Portfolios';
import { Skills } from 'components/Skills/Skills';
import { Languages } from 'components/Languages/Languages';
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
                <Experience />
                <Education />
                <Portfolios />
                <Skills />
                <Languages />
            </div>
            <Footer />
        </div>
    );
}

export default App;
