import React, { Component } from 'react';
import basic from './media/basic.png';
import clinical from './media/clinical.png';
import engineering from './media/engineering.png';
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
        const image = pub.category==="Basic" ? basic : pub.category==="Clinical" ? clinical : pub.category==="Engineering" ? engineering : img4
        const imgStyle = {
            backgroundImage: 'url(' + image + ')',
            'objectFit': 'cover',
        }
        const summaryLoadClass = this.state.initialLoad === true ? 'initial-load sidebar' : 'sidebar';
        let linkHolder = <div></div>;
        if ( pub.link !== "") {
          linkHolder = <p><a className={ "summaryLink " + pub.category } href={ pub.link }>Read it Here →</a></p>;
        }
        return (
            <div className={summaryLoadClass} id="summary">
                <div className="rightside image" style={imgStyle}> </div>
                <div className="rightside info">
                    <div className="rightside title">
                            <div className= {"title-inside title-inside1 " + pub.category}>
                                <Textfit mode="multi" className="summaryText, textfit-title">
                                        { pub.title }
                                </Textfit>
                            </div>
                            <div className="title-inside">
                                <p />
                                <div className="summaryText">
                                    <p className={"summaryNames " + pub.category}> { names } </p>
                                    <p className="summaryDate" > { pub.date }, <span className="summaryPublication">{ pub.publication } </span></p>
                                    <span className="summaryTags" > { pub.type } </span> ,
                                    <span className="summaryTags" > { pub.category } </span> <p />
                                    { linkHolder }
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        );
    }
};
