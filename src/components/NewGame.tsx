import { ENEMY_HOUSES_NAMES } from 'data/Houses';
import {
    ChangeEventHandler,
    FunctionComponent,
    MouseEventHandler,
    useState,
} from 'react';
import { startGame } from 'store/Game';
import { useAppDispatch } from 'store/Hooks';
import { ActiveHouses, GameParams } from 'store/Types';

const initialGameParams: GameParams = {
    expansionCards: false,
    deckTracking: false,
    activeHouses: ENEMY_HOUSES_NAMES.reduce(
        (acc, house) => ({ [house]: false, ...acc }),
        {} as ActiveHouses,
    ),
};

export const NewGame: FunctionComponent = () => {
    const dispatch = useAppDispatch();
    const [gameParams, setGameParams] = useState<GameParams>(initialGameParams);

    const onGameParamChange: ChangeEventHandler<HTMLInputElement> = (evt) => {
        evt.preventDefault();
        setGameParams((prevGameParams) => ({
            ...prevGameParams,
            [evt.target.name]: evt.target.checked,
        }));
    };

    const onHouseSelectChange: ChangeEventHandler<HTMLInputElement> = (evt) => {
        evt.preventDefault();
        setGameParams((prevGameParams) => ({
            ...prevGameParams,
            activeHouses: {
                ...prevGameParams.activeHouses,
                [evt.target.name]: evt.target.checked,
            },
        }));
    };

    const onStartGame: MouseEventHandler = () => {
        dispatch(startGame(gameParams));
    };

    const onResetGame: MouseEventHandler = () => {
        setGameParams(initialGameParams);
    };

    return (
        <div>
            <div>
                <label htmlFor="expansionCards">Enable Expansion Cards</label>
                <input
                    type="checkbox"
                    id="expansionCards"
                    name="expansionCards"
                    checked={gameParams.expansionCards}
                    onChange={onGameParamChange}
                />
            </div>

            <div>
                <label htmlFor="deckTracking">Enable Deck Tracking</label>
                <input
                    type="checkbox"
                    id="deckTracking"
                    name="deckTracking"
                    data-testid="deckTracking"
                    checked={gameParams.deckTracking}
                    onChange={onGameParamChange}
                />
            </div>

            {ENEMY_HOUSES_NAMES.map((house) => (
                <div key={house}>
                    <label htmlFor={house}>{house}</label>
                    <input
                        type="checkbox"
                        id={house}
                        name={house}
                        checked={gameParams.activeHouses[house]}
                        onChange={onHouseSelectChange}
                    />
                </div>
            ))}

            <button onClick={onStartGame}>Start Game</button>
            <button onClick={onResetGame}>Reset</button>
        </div>
    );
};
