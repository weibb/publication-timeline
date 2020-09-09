import React, { Component } from 'react';
import { TimeEvent } from './TimeEvent';

export class Timeline extends Component {
    constructor( props ) {
        super( props );
        this.state = props.state;
        this.getSummary = props.getSummary;

        this.state.items = [];
        const pubs = this.state.config.pubs;
        pubs.map(event => {
            const key = event.id + 1;
            this.state.items.push(key);
        })
    }
    handleAdd() {
        const newItems = this.state.items.concat([
        prompt('Enter some text')
        ]);
        this.setState({items: newItems});
    }

  handleRemove(i) {
    let newItems = this.state.items.slice();
    newItems.splice(i, 1);
    this.setState({items: newItems});
  }
    render(){
            const pubs = this.props.matches;
            const timelineContent = [];
            const ruler = [];
<<<<<<< HEAD
            const d = new Date();
            for( let year = 1992; year <= d.getFullYear(); year += 1){
=======
            for( let year = 1970; year <= 2018; year += 1){
>>>>>>> Update readme; style About; make author generic
                const pubsByYear = [];
                pubs.map( event =>
                    {
                        const match = event.match ? true : false;
                        if (event.date === year){
                            pubsByYear.push(<TimeEvent key={ event.id + 1} id={(event.id + 1).toString()} match={match} className='timeEvent' getSummary={this.getSummary} getOldSummary={this.getOldSummary} />)
                        }
                    }
                );
                let yearColumn = <div id={year} key={year} className='year'>
                    {pubsByYear}
                </div>
                // console.log(pubsByYear);
                timelineContent.push(yearColumn);
                const name = year % 10 === 0 ? year.toString() : '';
                const tick = year % 10 === 0 ? 'bigTick' : 'tick';
                const yearMeasure = <div className='measure measure{year}' key={year}>
                    <div className ={tick}></div>
                    <p className = 'yearName'>{name}</p>
                </div>
                ruler.push(yearMeasure);
            }


            return (<div className="container timeline-display">
                        <div id="timeline-inner">
                            {timelineContent}
                        </div>
                        <div id="ruler">
                            {ruler}
                        </div>
                    </div>
                );
    }
}
