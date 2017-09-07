import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { config } from './config';
export const state = {
    minYear: 1970,
    maxYear: 2017,
    years: [],
    taggedYears: [],
    matches: [],
};

export class Actions extends Component {
    constructor() {
        super();
    }
    init() {
        state.pub = config.pubs[config.pubs.length-1];
        console.log(state.pub);
    }
    sortType( tag ) {
        const pubs = config.pubs;
        state.matches = [];
        for( let i = 0; i < pubs.length; i++ ) {
            const pub = pubs[ i ];
            state.years.push(pub.date);
            if( tag === 'all' ) {
                state.matches.push( pub.id );
                state.taggedYears.push(pub.date);
            }
            else {
                for( let j = 0; j < pub.type.length; j++) {
                    if( tag === pub.type[ j ] ) {
                        state.matches.push( pub.id );
                        state.taggedYears.push(pub.date);
                    }
                }
            }
        }
        console.log(state);
    }
    sortCategory( tag ) {
        const pubs = config.pubs;
        state.matches = [];
        for( let i = 0; i < pubs.length; i++ ) {
            const pub = pubs[ i ];
            state.years.push(pub.date);
            if( tag === 'all' ) {
                state.matches.push( pub.id );
                state.taggedYears.push(pub.date);
            }
            else {
                for( let j = 0; j < pub.type.length; j++) {
                    if( tag === pub.category[ j ] ) {
                        state.matches.push( pub.id );
                        state.taggedYears.push(pub.date);
                    }
                }
            }
        }
        console.log(state);
    }
}

/*

$( '#caseReport' ).click(function() {
    render( 'caseReport' );
    // console.log($(this).attr('id'));
});

const state = {
    minYear: 0,
    maxYear: 0,
    years: [],
    taggedYears: [],
    matches: [],
}

const sortType = function sortType( tag ) {
    state.matches = [];
    for( let i = 0; i < pubs.length; i++ ) {
        const pub = pubs[ i ];
        state.years.push(pub.date);
        if( tag === 'all' ) {
            state.matches.push( pub.id );
            state.taggedYears.push(pub.date);
        }
        else {
            for( let j = 0; j < pub.type.length; j++) {
                if( tag === pub.type[ j ] ) {
                    state.matches.push( pub.id );
                    state.taggedYears.push(pub.date);
                }
            }
        }
    }
};

const render = function render(tag, minYear, maxYear) {
    sortType(tag);
    const matches = state.matches;
    state.minYear = minYear || Math.min(...state.years);
    const d = new Date();
    state.maxYear = maxYear || d.getFullYear();
    let years = '';
    let i;
    for( i = state.minYear; i <= state.maxYear; i++ ){
        years += '<div class="year column" id="' + i + '"></div>';
    }
    $('#timeline').html( years );
    for( i = state.minYear; i <= state.maxYear; i++ ){
        let entries = '';
        for( let j = 0; j < matches.length; j++ ) {
            const pub = getPub(matches[j]);
            console.log(pub);
            if( pub.date == i ){
                console.log('match');
                entries += ('<span class="entry" id="' + matches[j] + '"></span>');
            }
        }
        $('#' + i ).html( entries );
    }

}

$(document).on('click', '.entry', function() {
    console.log('click!');
    const id = ($(this).attr('id'));
    const pub = getPub(id);
    $( '#Title' ).html( pub.title );
    let authors = '';
        if ( pub.firstAuthor ) {
            authors += pub.firstAuthor;
        }
        if ( pub.secondAuthor ) {
            authors += ', ' + pub.secondAuthor;
        }
        if ( pub.thirdAuthor ) {
            authors += ', ' + pub.thirdAuthor;
        }
    $( '#Authors' ).html( authors );
    $( '#Year' ).html( pub.year );
    $( '#PublicationTitle' ).html( pub.pubTitle);
    $( '#PubType' ).html( pub.pubType );
    $( '#Category' ).html( pub.category );
    $( '#Link' ).html( '<a href=" ' pub.link ' ">Read it Here</a>');
});
$('#background').click(function(){
    // this needs to replace a filled entry with no entry
    $('#pubCard').addClass('hidden', 500);

});

const getPub = function getPub(id){
    for( let i = 0; i < pubs.length; i++ ) {
        const pub = pubs[ i ];
        if (pub.id == id) {
            return pub;
        }
    }
}

render( 'all' );

*/
