import { connect } from 'react-redux';
import App from '../App';

const mapStateToProps = state => ({
    ...state.game
});

export default connect(mapStateToProps)(App);
