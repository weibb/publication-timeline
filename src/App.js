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
                                    <div className="year" id="80s">1980s</div>
                                    <div className="year" id="90s">1990s</div>
                                    <div className="year" id="00s">2000s</div>
                                    <div className="year" id="10s">2010s</div>
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
