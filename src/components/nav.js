import React from 'react';


class Nav extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            topOffset: "",
            navClasses: "nav",
            currentLink: ""
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        let header = document.getElementById("nav-header");
        let sticky = header.offsetTop;
        let windowOffset = window.pageYOffset;

        if ( windowOffset > sticky ) {
            this.setState({ navClasses: "nav nav-sticky" });
        } else {
            this.setState({ navClasses: "nav" });
        }
    }

    clickHandler = (e) => {
        console.log("hi: " + e.target.innerHTML)
    }

    render() {
        return (
            <div id="nav-header" className={this.state.navClasses}>
                <div className="nav-wrapper">
                    <div className="nav-logo"><a href="#hero">Tibby Starks</a></div>
                    <div className="nav-links">
                        <ul>
                            <li><a href="#about" onClick={this.clickHandler}>About</a></li>
                            <li><a href="#portfolio" onClick={this.clickHandler}>Portfolio</a></li>
                        </ul>
                    </div>
                    {/* <div className="nav-mobile">
                        <select name="" id="nav-mobile-links">
                            <option value="">About</option>
                            <option value="">Portfolio</option>
                            <option value="">Contact</option>
                        </select>
                    </div> */}
                </div>
            </div>
        );
    }
}

export default Nav;