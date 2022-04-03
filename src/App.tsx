import { FunctionComponent } from 'react';
import atreides from './assets/atreides.svg';
import './App.css';
import { isDev } from 'utils/IsDev';
import { NewGame } from 'components/NewGame';

const App: FunctionComponent = () => {
    if (isDev()) {
        return (
            <>
                <div className="App-text">This is the development view.</div>
                <NewGame />
            </>
        );
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={atreides} className="App-logo" alt="logo" />
                <div>THE SPICE MUST FLOW</div>
                <div className="App-link">Coming Soon</div>
            </header>
        </div>
    );
};

export default App;
