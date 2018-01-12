import React, { Component } from 'react';
import img1 from './media/1.png';
import img2 from './media/2.png';
import img3 from './media/3.png';
import img4 from './media/4.png';
import { Textfit } from 'react-textfit';

export class Summary extends Component {
    constructor( props ) {
        super( props );
        this.state = props.state;
        this.events = props.events;
    }

    render() {
        const pub = this.props.pub;
        let names = pub.author1;
        const split = pub.author2 ? ', ' : ' & ';
        if ( pub.author2 ) names += split + pub.author2;
        if ( pub.author3 && pub.moreAuthors ) names += ', ' + pub.author3;
        else if ( pub.author3 ) names += ' & ' + pub.author3;
        if ( pub.moreAuthors ) names += ' et al.';
        const image = pub.image==="img1" ? img1 : pub.image==="img2" ? img2 : pub.image==="img3" ? img3 : img4
        const imgStyle = {
            backgroundImage: 'url(' + image + ')',
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
                                    <span className="summaryTags" > { pub.type } </span> ,
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
