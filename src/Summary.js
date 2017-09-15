import React, { Component } from 'react';
import { Textfit } from 'react-textfit';

export class Summary extends Component {
    constructor( props ) {
        super( props );
        this.state = props.state;
        this.events = props.events;
    }
    render() {
        console.log(this.props);
        const pub = this.props.pub;
        let names = pub.authors[0].name;
        const split = pub.authors[2] ? ', ' : ' & ';
        if ( pub.authors[1] ) names += split + pub.authors[1].name;
        if ( pub.authors[2] ) names += ' & ' + pub.authors[2].name;
        return (
            <div className="sidebar" id="summary">
                <div className="rightside image">
                    <img src={pub.image} />
                </div>
                <div className="rightside title">
                    <Textfit mode="multi" style={{color: "#FFF"}}>
                         { pub.title }
                    </Textfit>
                </div>
                <div className="rightside info">
                    <p> { names }
                    <br /> { pub.date }
                    <br /> { pub.publication }
                    <br />{ pub.type.map((type, i) => (
                        i < pub.type.length - 1 ? type + ', ' : type + ''
                    ))}
                    <br />{ pub.category.map((category, i) => (
                        i < pub.category.length - 1 ? category + ', ' : category + ''
                    ))}
                    </p>
                    <p><a href={ pub.link }>Read it Here →</a></p>
                </div>
            </div>
        );
    }
};
