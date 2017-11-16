import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export class TimeEvent extends Component {
    constructor( props ) {
        super( props );
        this.props = props;
        this.id = props.id;
        this.getSummary = props.getSummary;
        this.getOldSummary = props.getOldSummary;
    }
    render() {
        const className = this.props.match ? 'timeEvent match' : 'timeEvent no-match';
        return (
            <li>
                {this.props.value}
                <button
                    className={className}
                    onClick={( e ) => {
                        const self = this;
                        this.getSummary(this.props.id);

                    }}
                >
                    {this.props.children}
                </button>
            </li>
        );
    }
};
