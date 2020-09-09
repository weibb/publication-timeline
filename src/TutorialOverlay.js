import React, { Component } from 'react';

export class TutorialOverlay extends Component {
    constructor( props ) {
        super( props );
        this.props = props;
        this.hideTutorial = props.hideTutorial;
    }
    render() {
      const tutorialClose = this.props.state.tutorialVisible === true ? 'tutorial-show' : 'tutorial-hide';
        return (
            <div id="tutorialScreen" className={tutorialClose}>
                <div className="tutorialMessage">
                    <div className="tutorialHeader">
                      <img src={require('./media/tutorial.gif')} alt="Peter Gehlbach's Publication Timeline" />
                    </div>
                    <div className="mobileText">
                        <h1>Peter Gehlbach's Publication Timeline</h1>
                        <p>
                            &bull; Click on a dot to see publication entry.<br />
                            &bull; Entries are organized by date.<br />
                            &bull; Narrow your search with clicking on tags.<br />
                        </p>
                    </div>
                    <button
                        id="tutorial-close"
                        onClick={( e ) => {
                            console.log( 'clicked Close Tutorial' );
                            this.hideTutorial();
                        }}
                    > CLOSE </button>
                </div>
            </div>
        );
    }
};
