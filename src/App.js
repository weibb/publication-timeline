import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import { config } from './config';
import { Timeline } from './Timeline';
import { TimeEvent } from './TimeEvent';
import { Tags } from './Tags';

// create a React component for each publication object
// ID is in the component state
// the component has the click event listener
//

const time1 = new TimeEvent({ id: 'sup', children: 'I have content' });
time1.render();

class App extends Component {
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
                                <div className="year">1980s</div>
                                <div className="year">1990s</div>
                                <div className="year">2000s</div>
                                <div className="year">2010s</div>
                            </div>
                        </div>
                </div>

                <div className="sidebar" id="summary">
                    <div className="rightside image">
                        <img src="img_greece.jpg" />
                    </div>
                    <div className="rightside title">
                        <h1>Development of a miniature 3-DOF force sensing instrument for robotically assisted retinal microsurgery and preliminary results.</h1>
                    </div>
                    <div className="rightside info">
                        <p>Name Name, Name Name, Name Name
                        <br />2014
                        <br />IEEE
                        <br />Collaborative Research
                        <br />Engineering
                        </p>
                        <p>Read it Here →</p>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default App;
