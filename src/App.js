import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

import logo from './logo.svg';
import { config } from './config';
import { Timeline } from './Timeline';
import { TimeEvent } from './TimeEvent';
import { Summary } from './Summary';
import { Tags } from './Tags';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './App.css';

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
    oldPub: config.pubs.length-1,
};

const time1 = new TimeEvent({ id: 'sup', children: 'I have content' });
time1.render();

class App extends Component {

    constructor() {
        super();
        this.state = startingState;
        this.state.items = [ this.state.pub ];
        this.filter = this.filter.bind( this );
        this.selectType = this.selectType.bind( this );
        this.selectCategory = this.selectCategory.bind( this );
        this.getSummary = this.getSummary.bind( this );
        this.showSummary = this.showSummary.bind( this );
        this.getOldSummary = this.getOldSummary.bind( this );
        this.showOldSummary = this.showOldSummary.bind( this );
    }
    filter() {
        const { pubs } = config;
        const { type, category } = this.state;
        pubs.map (( pub ) => {
            if ((  pub.type == type || type === 'all' ) &&
            ( pub.category == category || category === 'all' )) {
                pub.match = true;
            }
            else {
                pub.match = false;
            }
        });
        return pubs;
    }
    selectType( tag ) {
        this.setState({ type: tag });
    }
    selectCategory( tag ) {
        this.setState({ category: tag });
    }
    getSummary( id ) {
        this.setState({ pub: id });
        this.setState({ items: [ this.state.pub ]});
        // animation
    }
    getOldSummary( id ) {
        this.setState({ oldPub: id });
    }
    showSummary(){
        console.log('called showSummary');
        return this.state.config.pubs[this.state.pub -1 ];
    }
    showOldSummary(){
        console.log('called showOldSummary');
        return this.state.config.pubs[this.state.oldPub -1 ];
    }
    render() {
        const style = { left: '60%', };
        const items = this.state.items.map((item, i) => (
            <Summary key={item} pub={this.state.config.pubs[this.state.pub -1 ]} setState={this.setState} state={this.state} />
        ));
        return (
            <div id="container">
                <Tags selectCategory={this.selectCategory} setState={this.setState} selectType={this.selectType} filter={this.filter} />
                <Timeline matches={this.filter()} state={this.state} getSummary={this.getSummary} getOldSummary={this.getOldSummary} />
                <ReactCSSTransitionGroup
                    transitionName={ {
                        enter: 'enter',
                        leave: 'peace',
                        appear: 'appear'
                      } }
                    transitionEnterTimeout={1500}
                    transitionLeave = {true}
                    transitionLeaveTimeout={1500}>
                    {items}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}

export default App;
