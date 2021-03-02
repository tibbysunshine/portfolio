import React from 'react';
import Gallery from './gallery';

class Portfolio extends React.Component {
    render() {
        return (
            <div id="portfolio"style={{paddingTop: "100px"}}>
                <h1 className="section-title">Work</h1>
                <Gallery />
            </div>
        );
    }
}

export default Portfolio;