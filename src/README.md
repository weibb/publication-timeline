import React, { Component } from 'react';

export class TimeEvent extends Component {
    constructor( props ) {
        super();
        this.props = props;
    }
    render() {
        console.log(this.props);
        return (
            <li>
                <button
                    onClick={( e ) => {
                        console.log(this.props);
                    }}
                >
                    {this.props.children}
                </button>
            </li>
        );
    }
};
