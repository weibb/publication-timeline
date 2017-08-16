import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


// create a React component for each publication object
// ID is in the component state
// the component has the click event listener
//
/*

// TimeEvent.js

export class TimeEvent extends React.Component {
    constructor( props ) {
        this.props = props;
    }
    render() {
        return (
            <button
                onClick={( e ) => {
                    // do something
                }}
            >
                {this.props.children}
            </button>
        );
    }
};

// TimeLine.js

import { TimeEvent } from './TimeEvent';

<Timeline>
    {this.events.map( event =>
        <TimeEvent id={event.id} />
            I have content
        </TimeEvent>
    )}
</Timeline>

<SingleRenderer>
    <match
        id={id}
    >
        <div>{name}</div>
    </match>
<SingleRenderer>

*/

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
                    <div className="leftside tags">
                        <ul>
                            <li><a href="#">Basic</a></li>
                            <li><a href="#">Clinical</a></li>
                            <li><a href="#">Engineering</a></li>
                            <li><a href="#">Original Research</a></li>
                            <li><a href="#">Collaborative</a></li>
                            <li><a href="#">Case Reports</a></li>
                            <li><a href="#">Book Chapters</a></li>
                            <li><a href="#">Abstracts</a></li>
                            <li><a href="#">Editorials</a></li>
                            <li><a href="#">Posters</a></li>
                            <li><a href="#">Proceeding Reports</a></li>
                            <li><a href="#">Patients</a></li>
                            <li><a href="#">Grants</a></li>
                            <li><a href="#">Other</a></li>
                        </ul>
                    </div>
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
