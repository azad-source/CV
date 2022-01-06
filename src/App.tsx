import React from 'react';
import 'normalize.css';
import './styles/app.scss';
import mainBg from './images/main-bg.png';
import { Header } from './components/Header/Header';

function App() {
    return (
        <div className="App" style={{ backgroundImage: `url(${mainBg})` }}>
            <Header />
        </div>
    );
}

export default App;
