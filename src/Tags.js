import React, { Component } from 'react';
import { config } from './config';
import { Textfit } from 'react-textfit';
import ImageLoader from 'react-imageloader';

function preloader() {
  return <img src="2.png" />;
}

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
        const aboutLink1 = config.author.link1.map((link, i) => (
            <a href={link.ref}> {link.text} </a>
        ));
        const aboutLink2 = config.author.link2.map((link, i) => (
            <a href={link.ref}> {link.text} </a>
        ));
        const aboutLink3 = config.author.link3.map((link, i) => (
            <a href={link.ref}> {link.text} </a>
        ));
        const aboutLink4 = config.author.link4.map((link, i) => (
            <a href={link.ref}> {link.text} </a>
        ));
        const aboutLink5 = config.author.link5.map((link, i) => (
            <a href={link.ref}> {link.text} </a>
        ));
        return (
            <div className="sidebar" id="profiler">
                <div id="person" className="leftside wordwrap">
                    <img alt='focus image' src={config.author.image} />
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
                    {aboutLink1} <br />
                    {aboutLink2} <br />
                    {aboutLink3} <br />
                    {aboutLink4} <br />
                    {aboutLink5} <br />
                </div>
            </div>

        );
    }
};
