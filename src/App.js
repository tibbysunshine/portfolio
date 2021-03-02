import React from 'react';
import Hero from "./components/hero";
import Nav from "./components/nav";
import About from "./components/about";
import Portfolio from "./components/portfolio";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      screenWidth: 0,
      scrollVisiblity: false
    }
  }

  componentDidMount() {
    this.setState({ screenWidth: window.innerWidth });
    document.addEventListener("scroll", () => {
      if (window.pageYOffset > 200) {
        this.setState({scrollVisiblity: true});
      } else {
        this.setState({scrollVisiblity: false});
      }
    });
  }

  ScrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTo = 0;
  }

  render() {
    return (
      <div className="App">
        <Hero />
        <Nav />
        <About />
        <Portfolio />
        {this.state.scrollVisiblity &&
          <div id="back-to-top" onClick={this.ScrollToTop()}><a href="/#">Back to Top</a></div>
        }
      </div>
    );
  }
}

export default App;
