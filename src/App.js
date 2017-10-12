import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

import logo from './logo.svg';
import './App.css';
import { config } from './config';
import { Timeline } from './Timeline';
import { TimeEvent } from './TimeEvent';
import { Summary } from './Summary';
import { Tags } from './Tags';

const timeline = <Timeline />
const startingState = {
    config: config,
    minYear: 1970,
    maxYear: 2017,
    years: [],
    taggedYears: [],
    matches: [],
    type: 'all',
    category: 'all',
    pub: config.pubs.length-1,
};

const time1 = new TimeEvent({ id: 'sup', children: 'I have content' });
time1.render();

class App extends Component {

    constructor() {
        super();
        this.state = startingState;
        this.filter = this.filter.bind( this );
        this.selectType = this.selectType.bind( this );
        this.selectCategory = this.selectCategory.bind( this );
        this.getSummary = this.getSummary.bind( this );
        this.showSummary = this.showSummary.bind( this );
    }
    filter() {
        const { pubs } = config;
        const { type, category } = this.state;
        return _.filter( pubs, ( pub ) => (
            (  pub.type == type || type === 'all' ) &&
            ( pub.category == category || category === 'all' )
        ));
    }
    selectType( tag ) {
        this.setState({ type: tag });
    }
    selectCategory( tag ) {
        this.setState({ category: tag });
    }
    getSummary( id ) {
        this.setState({ pub: id });
    }
    showSummary(){
        return this.state.config.pubs[this.state.pub -1 ];
    }
    render() {
        return (
            <div id="master">
                <div>
                    <Tags selectCategory={this.selectCategory} setState={this.setState} selectType={this.selectType} filter={this.filter} />
                </div>
                <div className="container" id="timeline">
                    <Timeline matches={this.filter()} state={this.state} getSummary={this.getSummary} />
                </div>
                <div id="summaryHolder">
                    <Summary pub={this.showSummary()} setState={this.setState} state={this.state}/>
                </div>
            </div>
        );
    }
}

export default App;
