import store from '../../store';

export default function handleMovement(player) {
    function handleKeyDown(e) {
        e.preventDefault();

        switch (e.key) {
            default:
                console.log(e.key);
        }
    }

    function getNewPosition(direction) {
        switch (direction) {
            default:
                return [0, 0];
        }
    }

    function movePlayer(direction) {
        store.dispatch({
            type: 'MOVE_PLAYER',
            payload: {
                position: getNewPosition(direction)
            }
        });
    }

    function handleKeyUp(e) {
        e.preventDefault();

        switch (e.key) {
            case 'w':
                return console.log('north');
            case 's':
                return console.log('south');
            case 'q':
                return console.log('west');
            case 'e':
                return console.log('east');
            default:
                console.log(e.key);
        }
    }

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return player;
}
