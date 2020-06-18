import React from 'react';

export default class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: 'world' };
    }

    change(event) {
        this.setState({ name: event.target.value });
    }

    render() {
        return (
            <div className="BoxOne">
                <input className="FildName" value={this.state.name} onChange={(e) => this.change(e)} />
                <p className="Text">Hello {this.state.name}!</p>
            </div>
        );
    }
}