import { combineReducers } from 'redux';
import playerReducer from './player-reducer';
import gameReducer from './game-reducer';

export default combineReducers({ player: playerReducer, game: gameReducer });
