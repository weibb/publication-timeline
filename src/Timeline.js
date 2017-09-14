import React, { Component } from 'react';
import { TimeEvent } from './TimeEvent';

export class Timeline extends Component {
    constructor( props ) {
        super( props );
        this.state = props.state;
        this.getSummary = props.getSummary;
    }
    render() {
        if ( this.props.matches && this.props.matches.length > 0) {
            const pubs = this.props.matches;
            return (
                <div>
                {pubs.map( event =>
                (<TimeEvent id={event.id} getSummary={this.getSummary} />)
            )}
        </div>)
        }
        else return( <div className="row">
            <div id="years" className="row">
                <div className="year" id="d0">0</div>
                <div className="year" id="d10">1</div>
                <div className="year" id="d20">2</div>
                <div className="year" id="d30">3</div>
                <div className="year" id="d40">4</div>
                <div className="year" id="d50">5</div>
                <div className="year" id="d60">6</div>
                <div className="year" id="d70">7</div>
                <div className="year" id="d80">8</div>
                <div className="year" id="d90">9</div>
            </div>
        </div> );
    }
};
