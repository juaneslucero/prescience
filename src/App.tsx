import React from 'react';
import atreides from './assets/atreides.svg';
import './App.css';
import { isDev } from 'utils/IsDev';

const App: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={atreides} className="App-logo" alt="logo" />
                <div>THE SPICE MUST FLOW</div>
                <div className="App-link">Coming Soon</div>
                {isDev() && <div className="App-text">This is the development view.</div> }
            </header>
        </div>
    );
};

export default App;
