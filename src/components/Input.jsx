import React, { Component } from 'react';

class Input extends Component {
    constructor() {
        super();

        this.handleKey.bind(this);
    }

    handleKey(e) {
        console.log(e.key);
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handleKey, false);
    }

    render() {
        return <input type='hidden' />;
    }
}

export default Input;
