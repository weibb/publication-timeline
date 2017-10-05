import React, { Component } from 'react';
import { config } from './config';

export class Tags extends Component {
    constructor( props ) {
        super( props );
        this.selectCategory = props.selectCategory;
        this.selectType = props.selectType;
        this.filter = props.filter;
    }

    render() {

        return (
            <ul className="leftside">
                <li key="title0"> Categories </li>
                {config.categories.map((categories, i) => (
                    <li key={i}>
                        <button
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
        );
    }
};
