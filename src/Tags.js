import React, { Component } from 'react';
import { config } from './config';


export class Tags extends Component {
    constructor( props ) {
        super( props );
        this.selectCategory = props.selectCategory;
        this.selectType = props.selectType;
        this.filter = props.filter;
        this.state = props.state;
        this.showAbout = props.showAbout;
        this.aboutVisible = props.aboutVisible;
    }

    render() {
        const categoryMatch = config.categories.map((category, i) => (
            category === this.props.category ? "category selected" : "category"
        ));
        const typeMatch = config.types.map((type, i) => (
            type === this.props.type ? "type selected" : "type"
        ));
        const aboutTag = this.props.aboutVisible === true ? 'about-show' : 'about-hide';
        const aboutButtonText = this.props.aboutVisible === false ? '⚬ About' : '✖ Close';
        const aboutLinks = config.author.links.map((link, i) => (
            <span key={i}><a href={link.ref} target="_blank"> {link.text} </a><br /></span>
          ));
        return (
            <div className="sidebar" id="profiler">
                <div id="person" className="leftside wordwrap">
                    <img alt="{categoryMatch}" src={config.author.image} />
                        <h2>{config.author.displayName}</h2>
                        <h3>{config.author.degrees}</h3>
                        <h4>{config.author.title} <br />
                            <b>{config.author.institution}</b></h4>
                        <button
                            id="about-button"
                            onClick={( e ) => {
                                console.log( 'clicked About' );
                                this.showAbout();
                            }}
                        > {aboutButtonText} </button>
                </div>
                <ul id="tags" className="leftside">
                    <li key="title0" className="tagsTitle"> Research Catagory </li>
                    {config.categories.map((category, i) => (
                        <li key={i} className="tagsItem">
                            <button
                                className={categoryMatch[i]}
                                onClick={( e ) => {
                                    console.log( category );
                                    this.selectCategory( category );
                                }}
                            >
                                { category }
                            </button>
                        </li>
                    ))}
                    <li key="title1" className="tagsTitle"> Publication Types </li>
                    {config.types.map((types, i) => (
                        <li key={i} className="tagsItem">
                            <button
                                className={typeMatch[i]}
                                onClick={( e ) => {
                                    let type = types;
                                    console.log( type );
                                    this.selectType( type );
                                }}
                            >
                                { types }
                            </button>
                        </li>
                    ))}
                </ul>
                <div id="about" className={aboutTag}>
                    <p>{config.author.summary}</p>
                    <p>{aboutLinks}</p>
                </div>
            </div>

        );
    }
};
