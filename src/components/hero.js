import React from 'react';

import TibbyPhoto from '../images/hero/headshot.png';
import TextBubble from '../images/hero/Bubble.png';

class Hero extends React.Component {
    render() {
        return (
            <div id="hero" className="hero-parallax">
                <div className="hero-text-wrapper"></div>
                <div className="hero-avatar">
                    <img className="hero-avatar-img" src={TibbyPhoto} alt="Tibby Sunshine" />
                    <div className="hero-bubble slideInRight animated">
                        <img className="hero-bubble-img" src={TextBubble} alt="Text Bubble - Hello! I'm Tibby Sunshine" />
                        <div className="hero-bubble-text">
                            <div className="bubble-text-wrapper delay-animate">
                            <div className="bubble-text-1">HELLO!</div>
                            <div className="bubble-text-2">
                                <div>I'm Tibby</div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Hero;