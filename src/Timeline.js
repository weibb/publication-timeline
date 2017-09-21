import React, { Component } from 'react';
import { TimeEvent } from './TimeEvent';

export class Timeline extends Component {
    constructor( props ) {
        super( props );
        this.state = props.state;
        this.getSummary = props.getSummary;
    }
    render(){
        if( this.props.matches && this.props.matches.length > 0) {
            const pubs = this.props.matches;
            const timeline = [];
            for( let year = 1970; year <= 2017; year += 1){
                const pubsByYear = [];
                pubs.map( event =>
                    {
                        if (event.date == year){
                            pubsByYear.push(<TimeEvent id={event.id} className='timeEvent' getSummary={this.getSummary} />)
                        }
                    }
                );
                let jsx = <div id={year} className='year'>{pubsByYear}</div>;
                console.log(pubsByYear);
                timeline.push(jsx);
            }
            return (<div id='timeline-inner'>{timeline}</div>);
        }
    }
}
