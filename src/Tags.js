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
    }

    render() {
        const categoryMatch = config.categories.map((category, i) => (
            category === this.props.category ? "category selected" : "category"
        ));
        const typeMatch = config.types.map((type, i) => (
            type === this.props.type ? "type selected" : "type"
        ));
        return (
            <div className="sidebar" id="profiler">
                <div className="leftside display-pic">
                    <img alt='focus image' src={config.author.image} />
                </div>
                <div className="leftside person wordwrap">
                    <h2>{config.author.displayName}</h2>
                    <h3>{config.author.degrees}</h3>
                    <h4>{config.author.institution}</h4>
                </div>
                <ul className="leftside tags">
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
                    <br />
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
            </div>

        );
    }
};
