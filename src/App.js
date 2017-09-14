import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import { config } from './config';
import { Timeline } from './Timeline';
import { TimeEvent } from './TimeEvent';
import { Summary } from './Summary';
import { Tags } from './Tags';

const time1 = new TimeEvent({ id: 'sup', children: 'I have content' });
time1.render();

class App extends Component {

    constructor( state ) {
        super();
        App.state = state || {};
    }

    render() {
        return (
            <div id="master">
                <div className="container">
                    <div className="sidebar" id="profiler">
                        <div className="leftside display-pic">
                            <img src="img_greece.jpg" />
                        </div>
                        <div className="leftside person">
                            <h2>Peter L. Gehlbach</h2>
                            <h3>MD, PhD</h3>
                            <h4>Johns Hopkins University</h4>
                        </div>
                        <Tags />
                    </div>

                    <div className="container" id="timeline">
                            <div className="row">
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
                            </div>
                    </div>
                    <div id="summaryHolder">
                        <Summary />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
