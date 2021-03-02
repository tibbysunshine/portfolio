import React from 'react';
import Portfolio from '../portfolio.json';


class Gallery extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            gallery: Portfolio.gallery
        }
    }


    render() {
        return (
            <div id="gallery" className="container">
                {this.state.gallery.map( item => {
                    return (
                        <div key={item.id} className={"gallery-card " + (item.tags)}>
                            <div className="card-img">
                                <img src={require("../images/portfolio" + item.src)} alt={item.alt} />
                            </div>
                            <div className="card-descript">
                                <h3>{item.title}</h3>
                                <h5>Subtitle</h5>
                                <p className="description">{item.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Gallery;