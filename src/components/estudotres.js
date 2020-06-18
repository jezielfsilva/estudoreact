import React from 'react';

export default class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { elapsed: 0 };
        this.tick = this.tick.bind(this);
    }

    componentDidMount() {
        this.timer = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    tick() {
        this.setState({ elapsed: this.state.elapsed + 1});
    }

    render() {
        return <div className="BoxTree">
                    <h1 className="TitleTwo">{this.state.elapsed} seconds</h1>
               </div>
    }
}