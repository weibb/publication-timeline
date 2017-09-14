import React, { Component } from 'react';
import { config } from './config';
import { state } from './Actions';
import { Actions } from './Actions';

const actions = new Actions;

export class Tags extends Component {
    // constructor() {
    //     super();
    // }
    render() {

        return (
            <ul>
                <li key="title0"> Categories </li>
                {config.categories.map((categories, i) => (
                    <li key={i}>
                        <button
                            onClick={( e ) => {
                                let category = categories.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
                                    return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
                                }).replace(/\s+/g, '');
                                console.log( category );
                                actions.selectCategory( category );
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
                                let type = types.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
                                    return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
                                }).replace(/\s+/g, '');
                                console.log( type );
                                actions.selectType( type );
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
