import React, { Component } from 'react';
export class timeEvent extends React.Component {
    constructor( props ) {
        super(props);
    }
    render() {
        return (
            <button
                onClick={( e ) => {
                    console.log('I am a working function!');
                }}
            >
                {this.props.children}
            </button>
        );
    }
};
