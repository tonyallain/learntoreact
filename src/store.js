import { createStore } from 'redux';
import reducer from './reducers';
import GameLoop from './utils/game-loop';
import { setFacing } from './actions/player-actions';

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const loop = new GameLoop();
let rot = 0;
loop.start();
loop.subscribe(() => {
    store.dispatch(setFacing(rot++ % 360));
    // store.dispatch({ type: 'SCALE' });
});

export default store;
