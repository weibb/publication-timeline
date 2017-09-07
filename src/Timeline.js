import React, { Component } from 'react';
import { state } from './Actions';
import { TimeEvent } from './TimeEvent';

export class Timeline extends Component {
    constructor( props ) {
        super();
        this.events = props.events;
    }
    render() {
        return this.events.map( event =>
            (<TimeEvent id={event.id} />)
        );
    }
};
