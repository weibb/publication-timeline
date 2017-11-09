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
        return (
            <li>
                {this.props.value}
                <button
                    className="timeEvent"
                    onClick={( e ) => {
                        const self = this;
                        this.getSummary(this.props.id);
                        setTimeout(( e ) => {
                            this.getOldSummary(this.props.id);
                            console.log('backed up summary');
                        }, 2000);

                    }}
                >
                    {this.props.children}
                </button>
            </li>
        );
    }
};
