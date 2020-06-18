import React from 'react';

export default class Cont extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    increment() {
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        return (
            <div className="BoxTwo">
                <h1 className="Title">{this.state.count}</h1>
                <button className="ClickAdd" onClick={this.increment.bind(this)}>Adicionar</button>
            </div>
        );
    }
}