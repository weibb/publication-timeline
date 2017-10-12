import React, { Component } from 'react';
import { config } from './config';
import { Textfit } from 'react-textfit';

export class Tags extends Component {
    constructor( props ) {
        super( props );
        this.selectCategory = props.selectCategory;
        this.selectType = props.selectType;
        this.filter = props.filter;
    }

    render() {

        return (
            <div className="sidebar" id="profiler">
                <div className="leftside display-pic">
                    <img alt="bio_image" src={config.author.photo} />
                </div>
                <div className="leftside person">
                    <Textfit mode="multi" style={{color: "#FFF"}}>
                        <h2>{config.author.displayName}</h2>
                        <h3>{config.author.degrees}</h3>
                        <h4>{config.author.institution}</h4>
                    </Textfit>

                </div>
                <ul className="leftside">
                    <li key="title0"> Categories </li>
                    {config.categories.map((categories, i) => (
                        <li key={i}>
                            <button
                                className="category"
                                onClick={( e ) => {
                                    let category = categories;
                                    console.log( category );
                                    this.selectCategory( category );
                                }}
                            >
                                { categories }
                            </button>
                        </li>
                    ))}
                    <li key="title1"> Types </li>
                    {config.types.map((types, i) => (
                        <li key={i}>
                            <button
                                className="type"
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
