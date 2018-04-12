import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export class MobileOverlay extends Component {
    constructor( props ) {
        super( props );
        this.props = props;
        this.id = props.id;
    }
    render() {
        return (
            <div className="mobileScreen">
                <div className="mobileMessage">
                    <div className="mobileHeader">
                        <img src="../mobileMessage.png" />
                    </div>
                    <p className="mobileText">
                        For the best experience please view on a Tablet or Computer.
                    </p>
                </div>
            </div>
        );
    }
};
