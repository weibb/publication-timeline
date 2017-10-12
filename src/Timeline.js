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
            const ruler = [];
            for( let year = 1970; year <= 2017; year += 1){
                const pubsByYear = [];
                pubs.map( event =>
                    {
                        if (event.date == year){
                            pubsByYear.push(<TimeEvent id={event.id + 1} className='timeEvent' getSummary={this.getSummary} />)
                        }
                    }
                );
                let yearColumn = <div id={year} className='year'>{pubsByYear}</div>;
                // console.log(pubsByYear);
                timeline.push(yearColumn);
                const name = year % 10 === 0 ? year.toString() : '';
                const tick = year % 10 === 0 ? 'bigTick' : 'tick';
                const yearMeasure = <div className='measure measure{year}'>
                    <div className ={tick}></div>
                    <p className = 'yearName'>{name}</p>
                </div>
                ruler.push(yearMeasure);
            }


            return (<div className='timeline'>
                        <div id='timeline-inner'>
                            {timeline}
                        </div>
                        <div id='ruler'>
                            {ruler}
                        </div>
                    </div>
                );
        }
    }
}
