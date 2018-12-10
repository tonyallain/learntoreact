import React, { Component } from 'react';
import Canvas from './components/Canvas';

class App extends Component {
    render() {
        return <Canvas />;
    }

    componentDidMount() {
        this.props.update.start();
        this.props.input.start();
    }

    componentWillUnmount() {
        this.props.update.stop();
        this.props.input.stop();
    }
}

export default App;
