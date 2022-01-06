import React from 'react';
import 'normalize.css';
import './App.scss';
import mainBg from './assets/images/main-bg.png';
import { Header } from './components/Header/Header';

function App() {
    return (
        <div className="App" style={{ backgroundImage: `url(${mainBg})` }}>
            <Header />
        </div>
    );
}

export default App;
