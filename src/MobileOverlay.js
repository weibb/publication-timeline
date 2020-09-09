import React, { Component } from 'react';

export class MobileOverlay extends Component {
    constructor( props ) {
        super( props );
        this.props = props;
    }
    render() {
        return (
            <div id="mobileScreen">
                <div className="mobileMessage">
                    <div className="mobileHeader">
                        <img src={require('./media/mobile.gif')} alt="For best experience please view with a resolution of 768 x 1024 or higher." />
                    </div>
                    <div className="mobileText">
                        <h1>Peter Gehlbach's Publication Timeline</h1>
                        For the best experience please view with a resolution of <b>768 x 1024</b> or higher.

                        <p className="mobileText">
                            &bull; <a href="https://weibb.github.io/pgeh-site/">PeterGehlbach.com</a> <br />
                            &bull; <a href="https://medium.com/peter-l-gehlbach-md-phd">Medium Site</a> <br />
                            &bull; <a href="https://medium.com/peter-l-gehlbach-md-phd">Johns Hopkins Site</a> <br />
                        </p>
                    </div>
                </div>
                <div id="mobileScreenbg"></div>
            </div>
        );
    }
};
