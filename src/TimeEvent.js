import React, { Component } from 'react';

export class TimeEvent extends Component {
    constructor( props ) {
        super( props );
        this.props = props;
        this.getSummary = props.getSummary;
    }
    render() {
        console.log(this.props);
        return (
            <li>
                <button
                    className="timeEvent"
                    onClick={( e ) => {
                        console.log(this.props.id);
                        this.getSummary(this.props.id);
                    }}
                >
                    {this.props.children}
                </button>
            </li>
        );
    }
};
