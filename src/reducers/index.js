import { combineReducers } from 'redux';
import playerReducer from './player-reducer';
import bottomReducer from './bottom-reducer';
import topReducer from './top-reducer';
import gameReducer from './game-reducer';
import enemyReducer from './enemy-reducer';
import muzzleReducer from './muzzle-reducer';

export default combineReducers({
    player: playerReducer,
    game: gameReducer,
    bottom: bottomReducer,
    top: topReducer,
    enemy: enemyReducer,
    muzzle: muzzleReducer
});
