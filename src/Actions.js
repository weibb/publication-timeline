import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { config } from './config';
export const state = {};

export class Actions extends Component {
    constructor() {
        super();
    }
    init() {
        state.pub = config.pubs[config.pubs.length-1];
        console.log(state.pub);
    }
}

export class Summary extends Component {
    constructor( props ) {
        super();
        this.props = props;
        this.events = props.events;
    }
    render() {
        console.log(this.props);
        return (
            <div className="sidebar" id="summary">
                <div className="rightside image">
                    <img src="/img_greece.jpg" />
                </div>
                <div className="rightside title">
                    <h1>Development of a miniature 3-DOF force sensing instrument for robotically assisted retinal microsurgery and preliminary results.</h1>
                </div>
                <div className="rightside info">
                    <p> { state.pub.authors[0].name }
                    <br />2014
                    <br />IEEE
                    <br />Collaborative Research
                    <br />Engineering
                    </p>
                    <p>Read it Here →</p>
                </div>
            </div>
        );
    }
};
