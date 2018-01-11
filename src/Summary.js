import React, { Component } from 'react';
import { Textfit } from 'react-textfit';

export class Summary extends Component {
    constructor( props ) {
        super( props );
        this.state = props.state;
        this.events = props.events;
    }

    render() {
        const pub = this.props.pub;
        let names = pub.authors[0].name;
        const split = pub.authors[2] ? ', ' : ' & ';
        if ( pub.authors[1] ) names += split + pub.authors[1].name;
        if ( pub.authors[2] ) names += ' & ' + pub.authors[2].name;
        const imgStyle = {
            backgroundImage: 'url(' + pub.image + ')',
            'objectFit': 'cover',
        }
        const summaryLoadClass = this.state.initialLoad === true ? 'initial-load sidebar' : 'sidebar';
        return (
            <div className={summaryLoadClass} id="summary">
                <div className="rightside image" style={imgStyle}> </div>
                <div className="rightside info">
                    <div className="rightside title">
                            <div className="title-inside title-inside1">
                                <Textfit mode="multi" style={{color: "#FFF"}}>
                                    <p className="summaryTitle">
                                        { pub.title }
                                    </p>
                                </Textfit>
                            </div>
                            <div className="title-inside">
                                <p />
                                <p className="summaryText">
                                    <p className="summaryNames"> { names } </p>
                                    <p className="summaryDate" > { pub.date }, <span className="summaryPublication">{ pub.publication } </span></p>
                                    <span className="summaryTags" > { pub.type } </span> <br />
                                    <span className="summaryTags" > { pub.category } </span> <p />
                                    <p><a className="summaryLink" href={ pub.link }>Read it Here →</a></p>
                                </p>
                            </div>
                    </div>
                </div>
            </div>
        );
    }
};
