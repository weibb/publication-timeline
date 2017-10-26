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
        const imgStyle = {
            backgroundImage: 'url(' + pub.image + ')',
            'objectFit': 'cover',
        }
        return (
            <div className="sidebar" id="summary">
                <div className="rightside image" style={imgStyle} />
                <div className="rightside info">
                    <div className="rightside title">
                            <div className="title-inside title-inside1">
                                <Textfit mode="multi" style={{color: "#FFF"}}>
                                    <h1>
                                        { pub.title }
                                    </h1>
                                </Textfit>
                            </div>
                                <div className="title-inside">
                                <br />
                                <p> { names }
                                <br /> { pub.date }
                                <br /> { pub.publication }
                                <br />{ pub.type } { pub.category }
                                </p>
                                <p><a href={ pub.link }>Read it Here →</a></p>
                            </div>
                    </div>
                </div>
            </div>
        );
    }
};
