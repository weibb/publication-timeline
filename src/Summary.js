import React, { Component } from 'react';
import { state } from './Actions';

export class Summary extends Component {
    constructor( props ) {
        super();
        this.props = props;
        this.events = props.events;
    }
    render() {
        console.log(this.props);
        let names = state.pub.authors[0].name;
        const split = state.pub.authors[2] ? ', ' : ' & ';
        if ( state.pub.authors[1] ) names += split + state.pub.authors[1].name;
        if ( state.pub.authors[2] ) names += ' & ' + state.pub.authors[2].name;
        return (
            <div className="sidebar" id="summary">
                <div className="rightside image">
                    <img src="/img_greece.jpg" />
                </div>
                <div className="rightside title" style={{overflow: 'hidden'}}>
                    <h2>{ state.pub.title }
                    </h2>
                </div>
                <div className="rightside info">
                    <p> { names }
                    <br /> { state.pub.date }
                    <br /> { state.pub.publication }
                    <br />{ state.pub.type.map((type, i) => (
                        i < state.pub.type.length - 1 ? type + ', ' : type + ''
                    ))}
                    <br />{ state.pub.category.map((category, i) => (
                        i < state.pub.category.length - 1 ? category + ', ' : category + ''
                    ))}
                    </p>
                    <p><a href={ state.pub.link }>Read it Here →</a></p>
                </div>
            </div>
        );
    }
};
