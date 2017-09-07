import React, { Component } from 'react';
import { config } from './config';

export class Tags extends Component {
    constructor() {
        super();
    }
    render() {

        return (
            <ul>
                {config.tags.map(function(tags, i){
                    return <li>
                        <button
                            onClick={( e ) => {
                            }}
                        >
                            { tags }
                        </button>
                    </li>
                })}
            </ul>
        );
    }
};
